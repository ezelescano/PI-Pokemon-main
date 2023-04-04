
import FilterAlphabe from "../../Component/Fiters/FilterAlphabe";
import FilterMaxMin from "../../Component/Fiters/FilterMaxMIn";
import PokeConteiner from "../../Component/PokeConteiner/PokeConteiner";
import Search from "../../Component/Search/Search";




const Home = () => {
    return(
        <>
        <Search/>
        <FilterMaxMin/>
        <FilterAlphabe/>
        <PokeConteiner/>
        </>
    )
}

export default Home;