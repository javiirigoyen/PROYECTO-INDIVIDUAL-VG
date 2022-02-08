import React from "react"
//import '../styles/CrearJuego.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getGenre, createGame } from "../Redux/Actions"

const Create= () => {

  const [state, setState] = useState({
    name: '',
    description: '', 
    released: '', 
    rating: '', 
    image: '', 
    platforms: [],
    genre: []
  });

  const dispatch = useDispatch();
  const genres = useSelector(state => state.genre)

  useEffect(() =>  {

    dispatch(getGenre())
    console.log(genres)
  }, [dispatch, genres])

  console.log(genres)
//
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
    console.log(state)
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(createGame(state));
    alert("The game was created")
  }

  return (
  <form className='cont-form' onSubmit={handleSumbit}>
    <h1>Crea tu propio juego</h1>

    <input
    className='input-form'
    type='text'
    placeholder='Nombre'
    value={state.name}
    name='name'
    onChange={handleChange}
    /> 

  <input
    className='input-form'
    type='text'
    placeholder='Descripcion'
    name='description'
    value={state.description}
    onChange={handleChange}
    /> 

  <input
    className='input-form'
    type='date'
    value={state.released}
    onChange={handleChange}
    /> 

  <div>
    {genres.map((c, index) => (
      <div key={index}>
       <input 
       type='checkbox' id={c.id}
       value={state.genre}
       />
       <label htmlFor={c.id}>{c.name}</label>
      </div>
    ))}
    </div> 

      <div>
      <div>
       <input type='checkbox' id='pc'/>
       <label htmlFor='pc'>Pc</label>
       <input type='checkbox' id='play5'/>
       <label htmlFor='play5'>PlayStation 5</label>
       <input type='checkbox' id='XOne'/>
       <label htmlFor='XOne'>Xbox One</label>
       <input type='checkbox' id='Play4'/>
       <label htmlFor='Play4'>PlayStation 4</label>
       <input type='checkbox' id='NS'/>
       <label htmlFor='NS'>Nintendo Switch</label>
      </div>
    </div> 

    <input type='submit' value='Crear juego'/>
  </form>
  );
};

export default Create;
