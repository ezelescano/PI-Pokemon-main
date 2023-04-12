import { useSelector } from "react-redux";
import PokeCard from "../PokeCard/PokeCard";




const Pagination = () => {

 const {paginationPage, pokemons} = useSelector(state => state);

 const lastIndex = paginationPage * 12;
 const firstIndex = lastIndex - 12;
 const currentPokemon = pokemons.slice(firstIndex, lastIndex);
    return(
        <>
        {
            currentPokemon?.map((pokes)=> {
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
    
            })
        }
        </>
    )
}

export default Pagination;