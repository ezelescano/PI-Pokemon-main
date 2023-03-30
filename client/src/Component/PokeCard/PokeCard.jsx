

const PokeCard = (props) => {
    return (

        <div>
            <img src={props.image} alt={props.name} />
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
        </div>


    )
}


export default PokeCard;