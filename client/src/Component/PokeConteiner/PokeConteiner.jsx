import {useSelector, useDispatch} from "react-redux";
import { changePage, getAllPokemon } from "../Redux/actions";
import { useEffect } from "react";
import style from "../PokeConteiner/PokeConteiner.module.css"
import Pagination from "../Pagination/Pagination";



const PokeConteiner = () => {
    const {pokemons, getName} = useSelector((state) => state)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemon())
    }, [dispatch]);
    let result;


    const pokePerPage = 12;

    let totalPage
    getName.length
    ? totalPage = 1 
    : totalPage = Math.ceil(pokemons.length / pokePerPage);
    
    
    return(



        <>
        <h1>Pokemons:</h1>
        
        {
            [...Array(totalPage).keys()].map(num => {
                return(
                    <button value={num + 1} onClick={(event) => dispatch(changePage(event.target.value))}>{num + 1}</button>
                )
            })
        }
        
        <div className={style.divConteiner}>
       <Pagination/>        
           </div> 
        </>
    )
}

export default PokeConteiner;