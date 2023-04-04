import { FILTER_ALPHABE, FILTER_MAX, FILTER_MIN, GET_ALL_POKEMON, GET_BY_ID, GET_BY_NAME } from "./action-types";

const initialState = {
    pokemons: [],
    detail: [],
    getName: [],
    orderAlpha: []
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                detail: [],
                getName: [],
                pokemons: action.payload,
                orderAlpha: action.payload
            }

        case GET_BY_ID:
            return {
                pokemons: [],
                getName: [],
                detail: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                getName: action.payload
            }
        case FILTER_ALPHABE:
            return {
                ...state,
                orderAlpha: action.payload
            }
        case FILTER_MAX:
            return {
                ...state,
                pokemons: state.pokemons.sort((a, b) => b.attack - a.attack)
            }
        case FILTER_MIN:
            return {
                ...state,
                pokemons: state.pokemons.sort((a, b) => a.attack - b.attack)
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;