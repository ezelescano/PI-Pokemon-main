import { useDispatch } from "react-redux";
import { filterMax, filterMin } from "../Redux/actions";

const FilterMaxMin = () => {
const dispatch = useDispatch();

const handleChange = (event) => {
    if(event.target.value === "Max to Min") dispatch(filterMax())
    if(event.target.value === "Min to Max") dispatch(filterMin())
    
}
    return(
        <div>
        <label>Sort by max and min attack</label>
        <select onChange={handleChange}>
            <option></option>
            <option value="Max to Min">Max to Min</option>
            <option value="Min to Max">Min to Max</option>
        </select>
        </div>
    )
}

export default FilterMaxMin;