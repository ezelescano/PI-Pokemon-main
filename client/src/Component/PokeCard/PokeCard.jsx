import { Link } from "react-router-dom";


const PokeCard = (props) => {
    return (

        <div>
            <img src={props.image} alt={props.name} />
            <Link to={`/detail/${props.id}`}>
                <p>Name: {props.name}</p>
            </Link>
            <p>Type: {props.type}</p>
        </div>


    )
}


export default PokeCard;