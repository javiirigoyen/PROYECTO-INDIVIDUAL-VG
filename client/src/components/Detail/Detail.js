import React from "react"
//import '../styles/MorInfo.css'
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGamesById, reset } from '../../Redux/Actions'
import Nav from "../Nav/Nav"
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
      <Nav />
      <h1>{detail.name}</h1>
      {detail.Genres
        ? detail.Genres?.map((c, index) => <p key={index}>{c.name}</p>)
        : detail.genres?.map((c, index) => <p key={index}>{c}</p>)}
      <img src={detail.image} alt="img not found" width="100" />
      <p>description</p>{detail.description}
      <p>released{detail.released}</p>
      <p>platforms{detail.platforms}</p>
    </div>
  );
  }
export default Detail;