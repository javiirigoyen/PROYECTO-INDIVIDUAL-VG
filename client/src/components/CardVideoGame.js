import  React  from "react"
import { Link } from "react-router-dom"

const CardVideoGame = ({genre, name, img, id}) =>{
return (
    <Link to={`/videogame/${id}`}>
    <div>
         <h3>{name}</h3>
         <h5>{genre}</h5>
         <img src = {img} alt = "img not found" width = "200px" height = "250px" />
    </div>
    </Link>
)
}










export default CardVideoGame