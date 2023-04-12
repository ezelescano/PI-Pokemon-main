import { FILTERS, CREATE_POKEMON, FILTER_ALPHABE, FILTER_FOR_TYPE, FILTER_MAX, FILTER_MIN, FILTER_POKE_API, FILTER_POKE_DB, GET_ALL_POKEMON, GET_ALL_TYPES, GET_BY_ID, GET_BY_NAME, CHANGE_PAGE } from "./action-types";
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

export const createPokemon = (input) => {
    console.log("/////soy el input del action", input);
    return async (dispatch) =>{
        try {
           dispatch({type: CREATE_POKEMON, payload: true })
           await axios.post("http://localhost:3001/pokemons", input) 

        } catch (error) {
            console.log(error);
            dispatch({type: CREATE_POKEMON, payload: false })
        }
    };
}

export const changePage = (num) => {
    return async(dispatch) => {
        dispatch({type: CHANGE_PAGE, payload: num})
    }
}

export const filters = (dataPokemon) => {
    return async (dispatch) => {
        dispatch({type:FILTERS, payload: dataPokemon})
    }
}