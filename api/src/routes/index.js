const { Router } = require('express');
const axios = require ('axios');
const { Videogame, Genre, VideogameXGender} = require('../db.js');
const { Op } = require('sequelize');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const info = async ()=> {
    try{
    
    let gamesPageOne = axios.get('https://api.rawg.io/api/games?key=eab826d4cf914afe83805016c7dd641d')
   
    let date = await Promise.all([gamesPageOne])

    gamesPageOne = date[0].data.results;
    
    game = gamesPageOne;
    
    game = game.map((result) => {
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            released: result.released,
            image: result.background_image,
            rating: result.rating,
            platforms: result.platforms.map(e => e.platform.name),
            genero: result.genero.map(e => e.name),
        }        
    });
     let juegos = []; 

    for(let i = 0; i < 100; i++){
        juegos.push(game[i]);

    }
    return juegos;
    } catch (error){
        console.log(error);
    }


}

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
            released:i.released,
            image: i.background_image,
            rating: i.rating,
            platforms: i.platforms.map(e => e.platform.name),
            genero: i.genero.map(e => e.name),
    };
})
    
        return mapInfo
    };

    const apiInfoById = async (id) => {
        let infoId = await axios.get(`https://api.rawg.io/api/games/${id}&key=eab826d4cf914afe83805016c7dd641`)
    }
router.get('/database', async (req, res) => {s
    try {
        const dbVideogame = await infoDB();
        res.send(dbVideogame);
    } catch (error) {
        res.status(400).send('not found', error);
    }
        
})

router.get('/videogames', async (req, res) => {
    const name = req.query.name; 
    const apiVideogame = await info();
    const dbVideogame = await infoDB();
    res.send(dbVideogame.concat(apiVideogame)); 

    router.get('/', async (req, res) => {
        const names= req.query.name;

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
        
   
           
router.post('/', async(req, res) => {
    const { name, description, released, rating, platforms, image } = req.body;
    try{
        if(name && description && platforms) {
         await Videogame.create({
            name,
            description,
            released,
            rating,
            platforms,
            image
        })
        dbGameCreate.addGenre(genreDB)
        return res.send('se creo juego');
    }
}}catch(error) {
    res.status(400).send({message:"error"})
        console.log(error)
    }
})
router.get('/genre', async(req, res) => {
    try{
    let genre = await axios.get('https://api.rawg.io/api/genres?key=6189995fbc584dedb6d4c7d34a1c5238');
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
