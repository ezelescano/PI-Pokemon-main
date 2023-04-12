import { CREATE_POKEMON, FILTER_ALPHABE, FILTER_FOR_TYPE, FILTER_MAX, FILTER_MIN, FILTER_POKE_API, FILTER_POKE_DB, GET_ALL_POKEMON, GET_ALL_TYPES, GET_BY_ID, GET_BY_NAME, CHANGE_PAGE, FILTERS, RESET } from "./action-types";

const initialState = {
    pokemons: [],
    detail: [],
    getName: [],
    allTypes: [],
    createPokemon: [],
    paginationPage: 1,
    allPokemons: []
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                detail: [],
                getName: [],
                paginationPage: 1,
                pokemons: action.payload,
                orderAlpha: action.payload

            }
            case RESET:
                return{
                    ...state,
                    getName: action.payload,
                    paginationPage: 1, 
                    pokemons: state.allPokemons
                }
        case CHANGE_PAGE:
            return {
                ...state,
                paginationPage: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                pokemons: [],
                getName: [],
                paginationPage: 1,
                detail: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                paginationPage: 1,
                getName: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }

        case CREATE_POKEMON:
            return {
                ...state,
                createPokemon: action.payload
            }
        case FILTERS:
            return {
                ...state,
                paginationPage: 1,
                pokemons: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;


