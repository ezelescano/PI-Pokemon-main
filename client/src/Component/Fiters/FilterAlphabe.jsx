import { useDispatch, useSelector } from "react-redux";
import { orderAlphabe } from "../Redux/actions";


// const FilterAlphabe = () => {
//   const dispatch = useDispatch();
//   const orderAlpha = useSelector((state) => state.orderAlpha)
  
//   const handlerChange = (event) =>{
//     if(event.target.value === "A to Z" ){
//         const pokesOrder = [...orderAlpha].sort((a, b) => a.name.localCompare(b.name))
//         dispatch(orderAlphabe(pokesOrder))
//     }
//     if(event.target.value === "Z to A") {
//         const pokesOrder = [...orderAlpha].sort((a, b) => b.name.localCompare(a.name))
//         dispatch(orderAlphabe(pokesOrder))
//     }
 
// }
//     return (
//         <div>
//             <label>Choose your option:</label>
//             <select onClick={handlerChange} >
//                 <option value=""></option>
//                 <option value="A to Z">A to Z</option>
//                 <option value="Z to A">Z to A</option>
//             </select>
//         </div>
//     )
// }

// export default FilterAlphabe;

const FilterAlphabe = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const orderAlpha = useSelector((state) => state.orderAlpha);
    
    const handlerChange = (event) =>{
      if(event.target.value === "A to Z" ){
          const sortedPokemons = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
          dispatch(orderAlphabe(sortedPokemons))
      }
      if(event.target.value === "Z to A") {
          const sortedPokemons = [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
          dispatch(orderAlphabe(sortedPokemons))
      }
    }
    
    return (
      <div>
        <label>Choose your option:</label>
        <select onClick={handlerChange} >
          <option value=""></option>
          <option value="A to Z">A to Z</option>
          <option value="Z to A">Z to Z</option>
        </select>
      </div>
    );
  };
  
  export default FilterAlphabe;
  