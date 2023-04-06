
import FilterAlphabe from "../../Component/Fiters/FilterAlphabe";
import FilterDBApi from "../../Component/Fiters/FilterDBApi";
import FilterMaxMin from "../../Component/Fiters/FilterMaxMIn";
import FilterType from "../../Component/Fiters/FilterType";
import PokeConteiner from "../../Component/PokeConteiner/PokeConteiner";
import Search from "../../Component/Search/Search";




const Home = () => {
    return(
        <>
        <Search/>
        <FilterDBApi/>
        <FilterType/>
        <FilterMaxMin/>
        <FilterAlphabe/>
        <PokeConteiner/>
        </>
    )
}

export default Home;