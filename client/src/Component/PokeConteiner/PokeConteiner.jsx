import {useSelector, useDispatch} from "react-redux";
import { getAllPokemon } from "../Redux/actions";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";

const PokeConteiner = () => {
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    
    useEffect(() => {
        dispatch(getAllPokemon())
    }, []);
    
    return(

        <>
        <h1>Pokemons:</h1>
        <div>
        {pokemons?.map((pokes, index)=> {
            return(

             <PokeCard 
            key= {index}
            image= {pokes.image}
            name={pokes.name}
            type={pokes.types.map((type) => {
                return(<ul>{type.name}</ul>) 
            })}/>
            )

        })}
        
           </div> 
        </>
    )
}

export default PokeConteiner;