import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "../Nav/NavBar.module.css"

const NavBar = () => {
    const location = useLocation();
    return (
       <nav className={style.navbar}>

        {location.pathname !== "/home" && <Link to='/home'><button>Go To Home!</button></Link>}
        {location.pathname !== "/form" && <Link to='/form'><button>Go to create your Pokémon!</button></Link>}
       </nav>
    )
}

export default NavBar;