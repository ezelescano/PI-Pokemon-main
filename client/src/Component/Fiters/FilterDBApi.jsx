import { useDispatch } from "react-redux";
import { filterPokeApi, filterPokeDB } from "../Redux/actions";


const FilterDBApi = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value === "Data Base") dispatch(filterPokeDB())
        if (event.target.value === "API") dispatch(filterPokeApi())
    }

    return (
        <div>
            <label>Data Base or Api</label>
            <select onChange={handleChange}>
                <option disabled selected>Take your option</option>
                <option value="Data Base">Data Base</option>
                <option value="API">API</option>
            </select>
        </div>
    )
}

export default FilterDBApi;