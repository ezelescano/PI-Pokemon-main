import { GET_ALL_POKEMON } from "./action-types";

const initialState = {pokemons: []};



const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_ALL_POKEMON:
        return {
            ...state,
            pokemons: action.payload
        }
    default: 
    return {
        ...state
    }
}
}

export default rootReducer;