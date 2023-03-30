import { GET_ALL_POKEMON } from "./action-types";
import axios from "axios";

export const getAllPokemon = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http:/localhost:3001/pokemons")
            dispatch({ type: GET_ALL_POKEMON, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}