import { GET_ALL_GAMES, GET_DB, GET_GAMES_BY_NAME, GET_GAMES_BY_ID, GET_GENRE, RESET  } from '../Actions/index'

const inicialState = { 
    genre:[],
    videogames: [], 
    videogamesId: {} };

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
        return {
            ...state, 
            videogames: action.payload
        }
        case GET_DB:
        return {
            ...state,
            videogames: action.payload      
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
                default:
            return state
           

    }
}

export default rootReducer;