const { Router } = require('express');
const axios = require ('axios');
const { Videogame, Genre, VideogameXGenre} = require('../db.js');
const { Op } = require('sequelize');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const info = async ()=> {
    try{
    
    let gamesShowed = axios.get('https://api.rawg.io/api/games?key=6189995fbc584dedb6d4c7d34a1c5238')
   
    let date = await Promise.all([gamesShowed]);

    gamesShowed = date[0].data.results;
    
    let game = gamesShowed;
    
    game = game.map((result) => {
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            released: result.released,
            image: result.background_image,
            rating: result.rating,
            platforms: result.platforms.map(e => e.platform.name),
            genres: result.genres.map(e => e.name),
        }        
    });
    let games = []; 

    for(let i = 0; i < 2; i++){
        games.push(game[i]);

    }
    return games;
    } catch (error){
        console.log(error);
    }

};

const infoDB = async () => {
    const db = await Videogame.findAll({
        include:{
            model: Genre,
            attributes: ['name'],
            through:{
                attributes: []
            }
        } 
    });
    return db;
};

const apiInfoByName = async (name) => {
    let infoName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=6189995fbc584dedb6d4c7d34a1c5238`);
    infoName = infoName.data.results;
    

    let mapInfo = infoName.map(i => {
        return {
            id: i.id,
            name: i.name,
            description: i.description,
            released: i.released,
            image: i.background_image,
            rating: i.rating,
            platforms: i.platforms.map(e => e.platform.name),
            genres: i.genres.map(e => e.name),
        }
    });
    
    return mapInfo;
}
const apiInfoByid = async (id) => {
    let infoId = await axios.get(`https://api.rawg.io/api/games/${id}?key=6189995fbc584dedb6d4c7d34a1c5238`);
    let infoIds = infoId.data;

    
        return {
            id: infoIds.id,
            name: infoIds.name,
            description: infoIds.description,
            released: infoIds.released,
            image: infoIds.background_image,
            rating: infoIds.rating,
            platforms: infoIds.platforms.map(e => e.platform.name),
            genres: infoIds.genres.map(e => e.name),
        }
    
        
}


router.get('/database', async (req, res) => {
    try {
        const dbVideogame = await infoDB();
        res.send(dbVideogame);
    } catch (error) {
        res.status(400).send(error);
    }
        
})


router.get('/', async (req, res) => {
    const apiVideogame = await info();

    const dbVideogame = await infoDB();

    res.send(dbVideogame.concat(apiVideogame));

    
});

router.get('/videogames', async (req, res) => {
    const name = req.query.name;
    
    if(name) {
        try {
        const apiGames = await apiInfoByName(name);
        const dbGames = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                },
                include: [{
                    model:  Genre
                }]
                
            });
            const totalGames = dbGames.concat(apiGames)
            return res.json(totalGames);
        } catch (error) {
            console.log(error)
        }
    } 
});

router.get('/videogame/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const dbGames = await Videogame.findByPk(id,{
                
                include: {
                    model:  Genre,
                    attributes: ['name'],
                through:{
                attributes: []
            }
                }
                
            });
            if(dbGames){
                res.json(dbGames)
            }
            
        }catch(error){
            try {
                apiGames = await apiInfoByid(id);
                res.json(apiGames)
                
                /* const totalGames = dbGames.concat(apiGames)
            res.json(totalGames); */
        } catch (error) {
            console.log(error)
        }}
     
})

router.post('/', async(req, res) => {
    const { name, description, released, rating, platforms, image, genre } = req.body;
    try{
        let genreDB = await Genre.findAll({
            where: { name: genre },
        });

            if(name && description && platforms) {
            let dbGameCreate = await Videogame.create({
                name,
                description,
                released,
                rating,
                platforms,
                image
            })

            dbGameCreate.addGenre(genreDB);
            return res.send('Your game has been succesfully created');
           // }
        }}catch(error) {
        res.status(400).send({message:'Error'})
        console.log(error)
    }
});

router.get('/genre', async(req, res) => {
    try{
    let genre = await axios.get('https://api.rawg.io/api/genres?key=eab826d4cf914afe83805016c7dd641d');
    genre = genre.data.results;
    
    let mapGenre = genre.map(g => {
        return {
            id: g.id,
            name: g.name
        }
    });

    
    mapGenre.forEach(element => {
        Genre.findOrCreate({
            where: {
                id: element.id,
                name: element.name
            }
        })
    });

    res.send(mapGenre);
    }catch (error) {
        console.log(error);
    }
    
})


module.exports = router;