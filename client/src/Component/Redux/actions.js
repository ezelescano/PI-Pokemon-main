import { GET_ALL_POKEMON, GET_BY_ID, GET_BY_NAME } from "./action-types";
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

export const orderAsDes = (option) => {
    return async (dispatch) => {
        
    }
}