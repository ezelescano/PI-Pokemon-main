
import FilterAlphabe from "../../Component/Fiters/FilterAlphabe";
import FilterMaxMin from "../../Component/Fiters/FilterMaxMIn";
import FilterType from "../../Component/Fiters/FilterType";
import PokeConteiner from "../../Component/PokeConteiner/PokeConteiner";
import Search from "../../Component/Search/Search";




const Home = () => {
    return(
        <>
        <Search/>
        <FilterType/>
        <FilterMaxMin/>
        <FilterAlphabe/>
        <PokeConteiner/>
        </>
    )
}

export default Home;