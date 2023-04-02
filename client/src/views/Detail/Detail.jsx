import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../Component/Redux/actions";


const Detail = () => {

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    let { id } = useParams()

    
        useEffect(() => {
        dispatch(getById(id))
        
    }, [dispatch]);
    return (
        <div>
            <img src={detail?.image} alt={detail.name} />
            <h1>Name: {detail?.name}</h1>
            <p>ID : {detail?.id}</p>
            <p>Hp: {detail?.hp}</p>
            <p> Attack: {detail?.attack}</p>
            <p>Defense: {detail?.defense}</p>
            <p>Speed: {detail?.speed}</p>
            <p>Height: {detail?.height} </p>
            <p>Weigth: {detail?.weigth}</p>
            <p>Type: </p> {detail.types &&
              detail.types.map((type) => <ul> {type.name}</ul>)} 
        </div>
    )
}

export default Detail;