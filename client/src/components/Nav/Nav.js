import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar"
import CreatedOrExist from '../../Filters/CreatedOrExist';
import ByGenre from '../../Filters/ByGenre';
import style from "./Nav.module.css"


const Nav = ({handlerFilter, handlerRating}) => {


  return <div className={style.cont}>
      
    <div className={style.nav}>
       <Link to="/home">
          <img src='https://www.pngmart.com/files/17/Vector-Gamepad-PNG-Image.png' width="50px"/>
     </Link>
      <Link to="/create">
             Create
      </Link> 
       <Link to="/">
         Landing Page
      </Link> 
       <SearchBar/>  
      </div>

    
     <div className={style.filters}> 
     <CreatedOrExist/>
    <ByGenre/>  <div>
        <select onChange={(event) => handlerFilter(event)} className={style.filter}>
          <option value="">Filter alphabetically</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      <div>
        <select onChange={(event) => handlerRating(event)} className={style.filter}>
          <option value="">Filter Rating</option>
          <option value="menor-mayor">menor-mayor</option>
          <option value="mayor-menor">mayor-menor</option>
        </select>
      </div></div>
     
  </div>;
};

export default Nav;
