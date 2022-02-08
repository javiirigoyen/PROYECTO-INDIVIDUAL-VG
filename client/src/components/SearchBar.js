import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGameByName } from '../Redux/Actions';


const SearchBar = () => {
    let dispatch = useDispatch();
    const [ state, setState ] = useState('');

   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getGameByName(state));

  };
  const handleChange = (e) => {
      setState(
           e.target.value
      )
  }

  return (
  <div>
      <form onSubmit={handleSubmit}>
          <input type='text' value={state} onChange={handleChange} placeholder='buscar..'/>
          <input type='submit' value='Buscar'/>
      </form>
  </div>
  );
};

export default SearchBar;