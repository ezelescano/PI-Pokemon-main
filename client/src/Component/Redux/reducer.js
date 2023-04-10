import { FILTER_ALPHABE, FILTER_FOR_TYPE, FILTER_MAX, FILTER_MIN, FILTER_POKE_API, FILTER_POKE_DB, GET_ALL_POKEMON, GET_ALL_TYPES, GET_BY_ID, GET_BY_NAME } from "./action-types";

const initialState = {
    pokemons: [],
    detail: [],
    getName: [],
    orderAlpha: [],
    allTypes: [],
    filterTypes: []
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
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }
        case FILTER_FOR_TYPE:
            return {
                ...state,
                orderAlpha: [...state.pokemons].filter((poke) => {
                    let aux = false;
                    poke.types?.forEach((type) => {
                        if (type.name === action.payload) {
                            aux = true;
                        }
                    }
                    )
                    return aux;
                    // console.log("/////");
                })

            }
        case FILTER_POKE_DB:
            state.pokemons =  [...state.orderAlpha]
            // console.log("/////poke de db". state.pokemons);
            return {
                ...state,
                pokemons: state.pokemons?.filter((poke) =>{
                    let aux = false
                    if( typeof poke.id !== 'number'){
                        aux = true
                    }
                    return aux
                } )
            }
        case FILTER_POKE_API:
            state.pokemons =  [...state.orderAlpha]
            // console.log("/////poke de api". state.pokemons);
            return {
                ...state,
                pokemons: state.pokemons?.filter((poke) =>{
                    let aux = false
                    if( typeof poke.id === 'number'){
                        aux = true
                    }
                    return aux
                } )
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;


// .map((poke) => {
//     const arrayNamesTypes = poke.types.map((type) => type.name);
//     return arrayNamesTypes.filter((types) => types === action.payload)