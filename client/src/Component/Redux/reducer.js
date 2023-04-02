import { GET_ALL_POKEMON, GET_BY_ID } from "./action-types";

const initialState = {
    pokemons: [],
    detail: []
};



const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_ALL_POKEMON:
        return {
            ...state,
            pokemons: action.payload
        }
    
        case GET_BY_ID:
            return {
                detail: action.payload
            }
    default: 
    return {
        ...state
    }
}
}

export default rootReducer;