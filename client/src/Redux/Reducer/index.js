import { GET_ALL_GAMES, GET_DB, GET_GAMES_BY_NAME, GET_GAMES_BY_ID, GET_GENRE, RESET, GET_API, FILTER_BY_GENRE, FILTER_BY_ORDER, FILTER_BY_RATING } from '../Actions/index'

const inicialState = { 
    allVideogames: [],
    genre:[],
    videogames: [], 
    videogamesId: {} };

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
        return {
            ...state, 
            videogames: action.payload,
            allVideogames:action.payload
        }
        case GET_DB:
            console.log("hola", state.videogames)
        return {
            ...state,
            videogames: action.payload, 
            allVideogames:action.payload   
        }
        case GET_GAMES_BY_NAME:
        return {
            ...state,
            videogames: action.payload
        }
        case GET_GAMES_BY_ID:
        return {
            ...state,
            videogamesId: action.payload
        }
        case RESET:
            return {
                ...state, 
                videogamesId: {}
            }
            case GET_GENRE:
                return {
                    ...state,
                    genre: action.payload
                }
                case GET_API:
                    console.log(state.videogames)
                    return {
                        ...state,
                        videogames:action.payload,
                        allVideogames:action.payload
                    }


                    case FILTER_BY_GENRE:
                        const alljuegos = state.allVideogames
                        const generos = alljuegos.filter(c => c.genres?.find(c => c === action.payload) || c.Genres?.find(c=> c.name === action.payload))
                        const statusFiltered = action.payload === "todos" ? alljuegos : generos
                        return {
                            ...state,
                            videogames:statusFiltered
                        }
                        case FILTER_BY_ORDER:

                            const todos = state.videogames;
                            const NoRepeat = todos.slice().sort(function (a, b) {
                                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                  return 1;
                                }
                                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                                  return -1;
                                }
                                return 0;
                              })
                            let sortedGames =
                              action.payload === "a-z"
                           
                                 ? NoRepeat
                                : NoRepeat.reverse()
                            return {
                                ...state,
                                videogames:action.payload === ""?state.allVideogames: sortedGames,
                            }

                            case FILTER_BY_RATING:
                            const rat = state.videogames;
                            const ordena = rat.slice().sort(function (a, b) {
                                if (Number(a.rating ) > Number(b.rating)) {
                                  return 1;
                                }
                                if (Number(b.rating ) > Number(a.rating)) {
                                  return -1;
                                }
                                return 0;
                              })
                            let sortedRating =
                              action.payload === "menor-mayor"
                           
                                 ? ordena
                                : ordena.reverse()
                            return {
                                ...state,
                                videogames:action.payload === ""?state.allVideogames: sortedRating,
                            }

                default:
            return state
           

    }
}

export default rootReducer;