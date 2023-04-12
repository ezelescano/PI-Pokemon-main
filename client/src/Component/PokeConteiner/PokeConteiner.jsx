import {useSelector, useDispatch} from "react-redux";
import { changePage, getAllPokemon } from "../Redux/actions";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import style from "../PokeConteiner/PokeConteiner.module.css"
import Pagination from "../Pagination/Pagination";



const PokeConteiner = () => {
    const {getName, orderAlpha, pokemons, paginationPage } = useSelector((state) => state)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemon())
    }, [dispatch]);
    let result;

    // if(getName.length !== 0 ){
    //     result = getName
    // }else if(orderAlpha?.length !== 0 ){
    //     result = orderAlpha
    // }

    const pokePerPage = 12;
    const totalPage = Math.ceil(pokemons.length / pokePerPage);
    
     getName.length !== 0
    ?result = getName
    :result = orderAlpha
    
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