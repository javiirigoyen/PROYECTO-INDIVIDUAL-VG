import  React  from "react"
import { Link } from "react-router-dom"
import style from "./CardVideoGame.module.css"

const CardVideoGame = ({genres, name, img, id, Genres, rating}) =>{
return (
     <div className={style.row}>
           <div className={style.column}>
           <div className={style.card}>
           <div className={style.container}>
         <Link className={style.sub} to={`/videogame/${id}`}>
         <h1>{name}</h1>
         <h2>{genres}</h2>
         <h3>{rating}</h3>
         {
    Genres ? (Genres?.map((c, index) => (<p key={index}>{c.name}</p>))) : (genres?.map((c, index) => (<p key={index}>{c}</p>)))
    } 
         <img src = {img} alt = "img not found" width = "400px"/>
     
    </Link>
    </div>
    </div>
    </div>
    </div>
)
}

export default CardVideoGame