import  React  from "react"

const CardVideoGame = ({genre, name, image}) =>{
return (
    <div>
         <h3>{name}</h3>
         <h5>{genre}</h5>
         <img src = {image} alt = "img not found" width = "200px" height = "250px" />
    </div>
)
}










export default CardVideoGame