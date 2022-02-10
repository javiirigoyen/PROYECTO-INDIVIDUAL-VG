import React from "react"
//import '../styles/MorInfo.css'
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGamesById, reset } from '../Redux/Actions'
import Nav from "./Nav"
import { useParams } from "react-router-dom"

const Detail = () => {

  let dispatch = useDispatch();
  const detail = useSelector(state => state.videogamesId)
  const {id} = useParams();
  useEffect(() => {
    dispatch(getGamesById(id))
    return () => {
      dispatch(reset())
    }
  }, [id])

  return (
  <div>
    <Nav/>
     <h1>{detail.name}</h1>
     {
    detail.Genres ? (detail.Genres?.map(c => (<p>{c.name}</p>))) : (detail.genres?.map(c => (<p>{c}</p>)))
    } 
    <img src ={detail.image} alt = "img not found" width="100"/>
    <p>description{detail.description}</p>
    <p>released{detail.released}</p>
    <p>platforms{detail.platforms}</p>
  </div>
  
 
  );
  }
export default Detail;