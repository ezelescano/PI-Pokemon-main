import { FILTER_ALPHABE, GET_ALL_POKEMON, GET_BY_ID, GET_BY_NAME } from "./action-types";

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
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;