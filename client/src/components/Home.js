import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames } from '../redux/actions';
import Nav from './Nav';
import CardVideoGame from "./CardVideoGame"


const Home = () => {
  let dispatch = useDispatch();  
  const videojuegos = useSelector(state => state.videogames);
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllGames());
    setLoading(true)
  }, []);
  

  return (

    <div>
      <Nav/>
      {
        loading ? (
          <div>
            {
              videojuegos?.map(v => <CardVideoGame
              name={v.name}
              genres={v.genres}
              img={v.img}
              key={v.id}
               />)
              

            }
          </div>
        )
        : (<div>esta cargando</div>)
      }
    </div>
    );
  };
  
  export default Home;

































































/* import Nav from "../components/Nav";
import React from "react";
import { getAll } from '../Redux/Actions';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CardVideoGame from './CardVideoGame'
import { Link } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch()
  const allGames = useSelector (state=> state.videogames)
   */

/*   useEffect(() => {
    dispatch(getAll())
  },[])
//CUANDO TRABAJMOS POR EJEMPLO EN CASO BOTONES U ESAS COSAS HAY QUE USAR UN HANDLE
//LO QUE HACE ESTO ME LO RESETEA ASI EVITAS BUGS APRETAS AHI Y QUE TE TRAIGA ODO DE NUEVO 
  function handleClick(e){
    e.preventdefault()
    dispatch(getAll())

  }
    console.log(allGames)

  return <div>
      <Link to = "/create">Crear VideoJuego</Link>
      <h1>ME GUSTAN LOS VIDEOJUEGOS</h1>
      <button onClick={e =>{handleClick(e)}}>
        Volver a cargar todos los video juegos
      </button>
      <div>
        <select>
        {/*  ESTE VALUE LO QUE HACE ES PERMITIRME ACCEDER Y PREGUNTAR DESPUES, SI EL VALUE ES ASCENDENTE ENTONCES HACE ESTO Y SI ES DESCENDENTE HACE ESTO OTRO
          PERO LO QUE ME VA PERMITIR ACCENDER A LO QUE TIENE CADA VALOR DE ESAS OPCIONES PARA QUE CUANDO YO DESDE EL FRONT YO HAGA CLICK EN ESA OPCION SE HAGA 
          TODA LA LOGICA Y LA ACCION ME ENTIENDA SI O SI NECESITO PASARLE UN VALUE  
          <option value = "asc">Ascendente</option> 
          <option value = "desc">Descendente</option>
        </select>
<select>
  <option value = "Genre">Genero</option>
  <option value = "Aggregates">agregados</option>
  <option value = "Existing">existentes</option>
</select>

{allGames?.map((el) => {
  return (
    <div>
        <Link to = {"/home/" + el.id}>
        <CardVideoGame name = {el.name} image = {el.image} genre = {el.genre} key = {el.id}/>
        </Link>
</div>
  )
  })}
   </div>
          <Nav/>
       </div>;
}; */

