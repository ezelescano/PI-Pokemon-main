import { GET_ALL_POKEMON } from "./action-types";

const initialState = {pokemons: []};



const rootReducer = (state = initialState, action) => {
switch(action.type) {
    default: 
    return {
        ...state
    }
    break;
}
}

export default rootReducer;