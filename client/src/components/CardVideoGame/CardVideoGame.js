import  React  from "react"
import { Link } from "react-router-dom"
import style from "./CardVideoGame.module.css"

const CardVideoGame = ({genres, name, img, id, Genres, rating}) =>{
return (
         <Link className={style.sub} to={`/videogame/${id}`}>
           <div className={style.card}>
         <h1 className={style.img}>{name}</h1>
         <h3 className={style.img}>{rating}/5.0 ☆</h3>
         <div className={style.genre}>
         {
    Genres ? (Genres?.map((c, index) => (<p key={index} className={style.img}>{c.name}</p>))) : (genres?.map((c, index) => (<p key={index} className={style.img}>{c}</p>)))
    } 
    </div>
         <img src = {img} alt = "img not found" className={style.img2}/>
     
    </div>
    </Link>
  
)
}

export default CardVideoGame