import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar"

const Nav = () => {
  return <div>
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
  </div>;
};

export default Nav;
