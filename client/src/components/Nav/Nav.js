import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar"
import CreatedOrExist from '../../Filters/CreatedOrExist';
import ByGenre from '../../Filters/ByGenre';
import style from "./Nav.module.css"


const Nav = () => {


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

    
    
     
  </div>;
};

export default Nav;
