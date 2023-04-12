import { Link } from "react-router-dom";
import style from '../Landing/Landing.module.css'


const Landing = () => {
    return (
        <Link to='/home'>
            <div className={style.landing}>
            <button className={style.shadow__btn}>Home</button>
            </div>
        </Link>
    ) 
}


export default Landing;