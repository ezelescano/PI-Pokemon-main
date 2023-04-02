import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const NavBar = () => {
    const location = useLocation();
    return (
       <nav>

        {location.pathname !== "/" && <Link to='/home'>Go To Home!</Link>}
        <Link to='/form'>Go to create your Pokémon!</Link>
       </nav>
    )
}

export default NavBar;