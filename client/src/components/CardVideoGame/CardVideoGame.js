import  React  from "react"
import { Link } from "react-router-dom"
import style from "./CardVideoGame.module.css"

const CardVideoGame = ({genres, name, img, id, Genres, rating}) =>{
return (
    <Link to={`/videogame/${id}`}>
    <div>
         <h3 className={style.titulo}>{name}</h3>
         <h5>genre</h5>
         {
    Genres ? (Genres?.map((c, index) => (<p key={index}>{c.name}</p>))) : (genres?.map((c, index) => (<p key={index}>{c}</p>)))
    } 
         <img src = {img} alt = "img not found" width = "200px" height = "250px" />
         <p>{rating}</p>
     
    </div>
    </Link>
)
}










export default CardVideoGame