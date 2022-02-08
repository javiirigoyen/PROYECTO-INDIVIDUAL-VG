import axios from "axios"

export const GET_ALL_GAMES = "GET_ALL_GAMES"
export const GET_DB = "GET_DB"
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME "
export const GET_GAMES_BY_ID = "GET_GAMES_BY_ID"
export const CREATE_GAME = "CREATE_GAME"
export const GET_GENRE = "GET_GENRE"
export const RESET = "RESET"

// ESTA ES LA CONEXION DEL BACK CON EL FRONT
 export const getAllGames = () => async dispatch => {
    return  await axios.get("http://localhost:3001/videogames",{

    })
    .then((response) => {
        dispatch({
          type: GET_ALL_GAMES,
          payload: response.data,
        });
      });

}

 export const getDb = () => async dispatch => {
    return  await axios.get("http://localhost:3001/videogames/database")
    .then((response) => {
        dispatch({
          type: GET_DB,
          payload: response.data,
        });
      });

}

export const getGameByName = (name) => async dispatch => {
    return  await axios.get(`http://localhost:3001/videogames?name=${name}`)
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_NAME,
          payload: response.data,
        });
      });

}

export const getGamesById = (id) => async dispatch => {
    return  await axios.get(`http://localhost:3001/videogames/${id}`)
    .then((response) => {
        dispatch({
          type: GET_GAMES_BY_ID,
          payload: response.data,
        });
      });

}

export const createGame = () => async dispatch => {
    return  await axios.get("http://localhost:3001/videogames/create")
    .then((response) => {
        dispatch({
          type: CREATE_GAME,
          payload: response.data,
        });
      });

}

export const getGenre = () => async dispatch => {
    return  await axios.get("http://localhost:3001/genre")
    .then((response) => {
        dispatch({
          type: GET_GENRE,
          payload: response.data,
        });
      });

}

export const reset = () => dispatch => {
  return dispatch({
    type: RESET
  })
}

