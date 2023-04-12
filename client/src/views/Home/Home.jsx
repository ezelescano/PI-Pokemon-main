
import Filters from "../../Component/Fiters/Filters";
import PokeConteiner from "../../Component/PokeConteiner/PokeConteiner";
import Search from "../../Component/Search/Search";




const Home = () => {
    return(
        <>
        <Search/>
        <Filters/>
        <PokeConteiner/>
        </>
    )
}

export default Home;