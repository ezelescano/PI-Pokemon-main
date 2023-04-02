import { Link } from "react-router-dom";
import style from "../PokeCard/PokeCard.module.css"

const PokeCard = (props) => {
    return (

        <div className={style.divcard}>
            <img src={props.image} alt={props.name} />
            <Link to={`/detail/${props.id}`}>
                <p>Name: {props.name}</p>
            </Link>
            <p>Type: {props.type}</p>
        </div>


    )
}


export default PokeCard;