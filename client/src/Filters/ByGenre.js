import React , {useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import {filterGamesByGenre, getGenre} from "../Redux/Actions"

const ByGenre = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genre)

    useEffect (() => {
            dispatch(getGenre())
    }, [])

    const handleGenres = (e) => {
        dispatch(filterGamesByGenre(e.target.value))
    }
    console.log(genres)
    return (
        <div>
          <select onChange={(e) => handleGenres(e)}>
              <option value="">Filter By Genre</option>
              <option>todos</option>
              {
                  genres && genres.map(g => (
                      <option value={g.name} key={g.id}>{g.name}</option>
                  ))
              }
          </select>
          </div>
)
}

export default ByGenre







