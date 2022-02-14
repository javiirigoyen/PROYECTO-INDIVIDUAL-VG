import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar"
import CreatedOrExist from '../../Filters/CreatedOrExist';
import ByGenre from '../../Filters/ByGenre';

const Nav = ({handlerFilter, handlerRating}) => {

  return <div>
    <CreatedOrExist/>
    <ByGenre/>
      <Link to="/">
         LandingPage
      </Link> 
      <Link to="/home">
          Home
     </Link>
      <Link to="/create">
             Create
      </Link>

      <SearchBar/>
      <div style ={{height: "100px"}}>
        <select onChange={(event) => handlerFilter(event)}>
          <option value="">Filter alphabetically</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      <div style ={{height: "100px"}}>
        <select onChange={(event) => handlerRating(event)}>
          <option value="">Filter Rating</option>
          <option value="menor-mayor">menor-mayor</option>
          <option value="mayor-menor">mayor-menor</option>
        </select>
      </div>
  </div>;
};

export default Nav;
