import React from 'react';
import '../styles/MorInfo.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesById } from '../redux/actions'
import Nav from './Nav';

const MorInfo = (id) => {

  let dispatch = useDispatch();
  const morinfo = useSelector(state => state.videogamesId)

  useEffect(() => {
    dispatch(getGamesById(id))
  }, [id])

  return (
  <div className='cont-mor'>
    <Nav/>
      <h1>{morinfo.name}</h1>
  </div>
  );
  }
export default MorInfo