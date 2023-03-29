import { Link } from "react-router-dom";
import landing from '../../assets/landing.jpg'



const Landing = () => {
    return (
        <Link to='/home'>
            <img src={landing} />
            <button>HOME</button>
        </Link>
    )
}


export default Landing;