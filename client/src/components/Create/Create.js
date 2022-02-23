import React from "react"
//import '../styles/CrearJuego.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getGenre, createGame } from "../../Redux/Actions"
import { useHistory } from "react-router-dom";
import style from "./Create.module.css"
import Nav from "../Nav/Nav";


const Create= () => {

  const [state, setState, ] = useState({
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
  const myHistory = useHistory()

  useEffect(() =>  {

    dispatch(getGenre())
    console.log(genres)
  }, [])

  
//
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value 
    })
   
    console.log(state)
  }
  const handlePlatforms = (e) => {
    setState({
      ...state,
      platforms: state.platforms.includes(e.target.value) ? state.platforms.filter(el => el !== e.target.value) : state.platforms.concat(e.target.value)
  })
  }

  const handleGenres = (e) => {
    setState({
      ...state,
      genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
  })
  }
  

  const handleSumbit = (e) => {
e.preventDefault();
if( state.name === '') return alert('name is required');
if( state.description === '') return alert('description is required');
if( state.rating === '') return alert('rating is required');
if( state.image === '') return alert('image is required');
if( state.released=== '') return alert('released is required');
if( state.platforms.length === 0) return alert('platforms is required');
if( state.genre.length === 0) return alert('genre is required')

    dispatch(createGame(state));
    myHistory.push("/home")
    alert("Game created successfully!")
  }
return (
    <div>
      <Nav />

  <form className={style.form} onSubmit={handleSumbit}>
    <h1>Create your own game</h1>
    <div>
         <label> Name the Game: </label>
    <input
    className='input-form'
    type='text'
    placeholder='Name'
    value={state.name}
    name='name'
    onChange={handleChange}
    /> 
    </div>
<div>
      <label >Description: </label>
  <input
    className='input-form'
    type='text'
    placeholder='Description'
    name='description'
    value={state.description}
    onChange={handleChange}
    /> 
    </div>
<div>
     <label>Released: </label>
  <input
    className={style.date}
    name="released"
    type="date"
    placeholder="YYYY-MM-DD"
    value={state.released}
    onChange={handleChange}
    /> 
    </div>
    <div>
     <label>Rating: </label>
  <input
    className={style.rating}
    type='number'
    name="rating"
    value={state.rating}
    onChange={handleChange}
    placeholder="From 0 to 5"
    step="0.1"
    max="5"
    min="0.1"
    /> 
    </div>
    <div>
     <label>Image URL: </label>
  <input
    className='input-form'
    type='text'
    name="image"
    value={state.image}
    onChange={handleChange}
    placeholder="Insert an URL"
    /> 
    </div>

    <div  className={style.checkbox}>

    <div className={style.platDiv} id={style.genres}>
    <label>Genres: </label>
    {genres.map((c, index) => (
      <div key={index}>
       <input onChange={e => handleGenres(e)}
       name="genre"
       type='checkbox' id={c.id}
       value={c.name}
       />
       <label htmlFor={c.id}>{c.name}</label>
      </div>
    ))}
    </div> 

      <div className={style.platDiv}> 
            <label>Platforms: </label>
            <div><input value="PlayStation 4" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PS4</label></div>
            <div><input value="PlayStation 5" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PS5</label></div>
            <div><input value="PC" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PC</label></div>
            <div><input value="SEGA" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>SEGA</label></div>
            <div><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>NINTENDO 64</label></div>
            <div><input value="Nintendo Switch" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>NINTENDO SWITCH</label></div>
            <div><input value="ATARI" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>ATARI</label></div>
            <div><input value="Xbox One" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>XBOX ONE</label></div>
            <div><input value="Xbox 360" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>XBOX X</label></div>
            <div><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>GAME BOY ADVANCED</label></div>
            <div><input value="IOS" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>IOS</label></div>
            <div><input value="Linux" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>LINUX</label></div>
            <div><input value="Android" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>ANDROID</label></div>
            <div><input value="WEB" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>WEB</label></div>
            <div><input value="PlayStation" type="checkbox" name="platforms" onChange={handlePlatforms}/><label>PLAYSTATION</label></div>
        </div>
    </div>

  
    

    <button class={style.create} type="submit" disabled={!state.name || !state.description || !state.rating || !state.image || !state.released || !state.platforms.length || !state.genre.length}>Create Game</button>
    {
    (!state.name || !state.description || !state.rating || !state.image || !state.released || !state.platforms.length || !state.genre.length) ?
    <h3 className={style.alert}>You have to complete all the fields to create a game!</h3>:
    ""
    }
  </form>
  {
    state.image && <img src={state.image} alt="IMAGE PREVIEW" className={style.img}/>
  }
  
    </div>
  );
};

export default Create;
