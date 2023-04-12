import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getByName } from "../Redux/actions";
import style from "../Search/Search.module.css";
const Search = () => {
    const [byName, setByName] = useState("");


    const dispatch = useDispatch();



    const imputHandler = (event) => {
        setByName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setByName("")
        dispatch(getByName(byName))
    }
    return (
        <div className={style.searchContainer}>
            <form>
                <label htmlFor="search">Find Your Pokemon!!</label>
                <input type="text" name='search' onChange={imputHandler} value={byName} placeholder="Search a Pokémon" />
                <button className={style.searchButton} onClick={handleSubmit} type="submit">Search!</button>
            </form>
        </div>


    )
}

export default Search;