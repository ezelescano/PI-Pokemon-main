import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filters, getAllTypes, reset } from "../Redux/actions";
import style from "../Fiters/Filters.module.css"





const Filters = () => {
    const { allTypes, allPokemons } = useSelector(state => state);
    const [orderAlpha, setOrderAlpha] = useState("");
    const [FilterDBApi, setFilterDBApi] = useState("");
    const [filterMAxMin, setFilterMaxMin] = useState("");
    const [filterType, setFilterType] = useState("");
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTypes())
    }, []);

    useEffect(() => {
        filter()
    }, [orderAlpha, FilterDBApi, filterMAxMin, filterType])

    const filter = () => {
        let currentPokemons = [...allPokemons];

        if (orderAlpha !== "" || FilterDBApi !== "" || filterMAxMin !== "" || filterType !== "") {
            if (FilterDBApi === "Data Base") currentPokemons = currentPokemons.filter(poke => typeof poke.id !== "number")
            if (FilterDBApi === "API") currentPokemons = currentPokemons.filter(poke => typeof poke.id === "number")
            if (filterType !== "") currentPokemons = currentPokemons.filter(poke => poke.types.find(type => type.name === filterType))
            if (filterMAxMin === "Max to Min") currentPokemons = currentPokemons.sort((a, b) => b.attack - a.attack)
            if (filterMAxMin === "Min to Max") currentPokemons = currentPokemons.sort((a, b) => a.attack - b.attack)
            if (orderAlpha === "A to Z") currentPokemons = currentPokemons.sort((a, b) => a.name.localeCompare(b.name));
            if (orderAlpha === "Z to A") currentPokemons = currentPokemons.sort((a, b) => b.name.localeCompare(a.name));

            dispatch(filters(currentPokemons))
        }

    }

    return (
        <div className={style.filterContainer}>


            <div>
                <label>Choose your option:</label>
                <select value={orderAlpha} onChange={(event) => (setOrderAlpha(event.target.value), setFilterMaxMin(""))} >
                    <option value=""></option>
                    <option value="A to Z">A to Z</option>
                    <option value="Z to A">Z to A</option>
                </select>
            </div>

            <div>
                <label>Data Base or Api</label>
                <select value={FilterDBApi} onChange={(event) => setFilterDBApi(event.target.value)}>
                    <option value="">Take your option</option>
                    <option value="Data Base">Data Base</option>
                    <option value="API">API</option>
                </select>
            </div>

            <div>
                <label>Sort by max and min attack</label>
                <select value={filterMAxMin} onChange={(event) => (setFilterMaxMin(event.target.value), setOrderAlpha(""))}>
                    <option value="" ></option>
                    <option value="Max to Min">Max to Min</option>
                    <option value="Min to Max">Min to Max</option>
                </select>
            </div>

            <div>
                <label>choose at Type:</label>
                <select value={filterType} onChange={(event) => setFilterType(event.target.value)}>
                    <option value=""></option>
                    {allTypes?.map((type) => {
                        return (
                            <option value={type.name}>{type.name}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <button className={style.buttonFilter} type="button" onClick={()=> (dispatch(reset()), setOrderAlpha(""), setFilterDBApi(""),setFilterMaxMin(""),setFilterType("")
 )}>Reset Filters</button>
            </div>
        </div>
    )
}

export default Filters;