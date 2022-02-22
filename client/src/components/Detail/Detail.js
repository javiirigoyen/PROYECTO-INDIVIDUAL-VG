import React from "react"
//import '../styles/MorInfo.css'
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGamesById, reset } from '../../Redux/Actions'
import Nav from "../Nav/Nav"
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"

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
      {Object.keys(detail).length ?
      <div>
      <Nav />
      <div className={style.main}>
      <img src={detail.image} alt="img not found"/>
      <div className={style.left}>
      <h1>{detail.name}</h1>
      
      <div className={style.desc}>{detail.description}</div>
      <div className={style.info}>
      <div>
      <h3>Platforms:</h3>
      <div className={style.plat}>
      {detail.platforms
        ? detail.platforms?.map((c, index) => <p key={index}>{c}</p>)
        : detail.platforms?.map((c, index) => <p key={index}>{c}</p>)}
        </div>
          </div>
      <div>
        <h3>Genres:</h3>
      {detail.Genres
        ? detail.Genres?.map((c, index) => <p key={index}>{c.name}</p>)
        : detail.genres?.map((c, index) => <p key={index}>{c}</p>)}
        </div>
        <div>
      <h3>Released:</h3>{detail.released}
        </div>
        
          </div>
      </div>
      </div>
    </div>
    :
    <div className={style.div}>
        <img src="https://www.itl.cat/pngfile/big/6-60813_kann-man-in-windows-10-ein-gif-als.gif" alt='img not found' height="100%"  className={style.loading}/>
        <h1>Loading...</h1>
      </div>
  }
    </div>
  )
};
export default Detail;