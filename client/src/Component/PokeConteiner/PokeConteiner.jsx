import {useSelector, useDispatch} from "react-redux";
import { getAllPokemon } from "../Redux/actions";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import style from "../PokeConteiner/PokeConteiner.module.css"



const PokeConteiner = () => {
    const {getName, orderAlpha, pokemons } = useSelector((state) => state)
    
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
    getName.length !== 0
    ?result = getName
    :result = orderAlpha
    
    return(

        <>
        <h1>Pokemons:</h1>
        <div className={style.divConteiner}>
        {result?.map((pokes)=> {
            return(

             <PokeCard 
            key= {pokes.id}
            image= {pokes.image}
            name={pokes.name}
            id= {pokes.id}
            type={pokes.types?.map((type) => {
                return(<ul>{type.name}</ul>) 
            })}/>
            )

        })}
        
           </div> 
        </>
    )
}

export default PokeConteiner;