import  React  from "react"
import { Link } from "react-router-dom"

const CardVideoGame = ({genres, name, img, id, Genres}) =>{
return (
    <Link to={`/videogame/${id}`}>
    <div>
         <h3>{name}</h3>
         <h5>genre</h5>
         {
    Genres ? (Genres?.map(c => (<p>{c.name}</p>))) : (genres?.map(c => (<p>{c}</p>)))
    } 
         <img src = {img} alt = "img not found" width = "200px" height = "250px" />
     
    </div>
    </Link>
)
}










export default CardVideoGame