import { FILTER_ALPHABE, FILTER_FOR_TYPE, FILTER_MAX, FILTER_MIN, GET_ALL_POKEMON, GET_ALL_TYPES, GET_BY_ID, GET_BY_NAME } from "./action-types";
import axios from "axios";

export const getAllPokemon = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/pokemons")
            dispatch({ type: GET_ALL_POKEMON, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}

export const getById = (id) => {
    return async (dispatch) => {
        try {
           const result = await axios.get(`http://localhost:3001/pokemons/${id}`) 
           dispatch({type: GET_BY_ID, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }

}

export const getByName =  (name) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            dispatch({type: GET_BY_NAME, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}

export const orderAlphabe = (option) => {
    return {
        type: FILTER_ALPHABE, payload: option
    }
}
export const filterMax= (max) => {
    return{
        type: FILTER_MAX, payload: max
    }
}

export const filterMin = (min) => {
    return {
        type: FILTER_MIN, payload: min
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/types")
           await dispatch({type: GET_ALL_TYPES, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}

export const filterForType = (pokeType) => {
    return{
        type: FILTER_FOR_TYPE, payload: pokeType
    }
}