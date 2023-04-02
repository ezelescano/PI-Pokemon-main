import {useSelector, useDispatch} from "react-redux";
import { getAllPokemon } from "../Redux/actions";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";



const PokeConteiner = () => {
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    useEffect(() => {
        dispatch(getAllPokemon())
    }, [dispatch]);
    
    return(

        <>
        <h1>Pokemons:</h1>
        <div>
        {pokemons?.map((pokes)=> {
            return(

             <PokeCard 
            key= {pokes.id}
            image= {pokes.image}
            name={pokes.name}
            id= {pokes.id}
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