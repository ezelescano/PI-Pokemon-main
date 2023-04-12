import { useSelector, useDispatch } from "react-redux";
import { filterForType, getAllTypes } from "../Redux/actions";
import { useEffect } from "react";


const FilterType = () => {

const dispatch = useDispatch();
const {allTypes} = useSelector((state) => state);


useEffect(() => {
   dispatch(getAllTypes())
}, []);

const handleChange = (event) => {
    dispatch(filterForType(event.target.value))
}

    return(
      <div>
        <label>choose at Type:</label>
        <select onChange={handleChange}>
            <option></option>
        {allTypes?.map((type) => {
            return(
                <option>{type.name}</option>
            )
        })}
       </select>
      </div>
    )
} 

export default FilterType;