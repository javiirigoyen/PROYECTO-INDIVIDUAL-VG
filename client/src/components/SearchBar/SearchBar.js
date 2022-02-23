import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../Redux/Actions';
import style from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState('');

   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGameByName(state));

  };
  const handleChange = (e) => {
      setState(e.target.value)
      
  } 
  console.log(state)

  return (
  <div>
      <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} placeholder='Search...' />
          <input type='submit' value='Search' className={style.button}/>
      </form>
  </div>
  );
};

export default SearchBar;