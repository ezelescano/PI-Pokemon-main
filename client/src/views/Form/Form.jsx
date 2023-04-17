import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPokemon, getAllTypes } from "../../Component/Redux/actions";
import { validateForm } from "./validateForm";
import style from "../Form/Form.module.css"

const Form = () => {
    const { allTypes } = useSelector((state) => state)
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type1: '',
        type2: ''

    });
    const [errors, setErrors] = useState({ name: '' })

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch]);


    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        setErrors(
            validateForm({
                ...input,
                [event.target.name]: event.target.value
            })
        )
    }

    const pokeCreated = (event) => {

        event.preventDefault()
        if (!input.name) {
            alert("error")
        } else {
            dispatch(createPokemon(input));
            setInput({
                name: '',
                image: '',
                hp: 0,
                attack: 0,
                defense: 0,
                speed: 0,
                height: 0,
                weight: 0,
                type1: '',
                type2: ''
            });
            alert("Pokemon Created")
        }
    }

    return (
        <div className={style.formContainer}>
            <form onSubmit={pokeCreated}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' value={input.name} onChange={handleInputChange} placeholder="Enter name" />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="image">Image: </label>
                    <input name="image" type="text" value={input.image} onChange={handleInputChange} placeholder="Enter Url" />
                    {errors.image && <p>{errors.image}</p>}
                </div>

                <div>
                    <label htmlFor="hp">Hp: </label>
                    <input name="hp" type="number" value={input.hp} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.hp && <p>{errors.hp}</p>}
                </div>

                <div>
                    <label htmlFor="attack">Attack: </label>
                    <input name="attack" type="number" value={input.attack} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.attack && <p>{errors.attack}</p>}
                </div>

                <div>
                    <label htmlFor="defense">Defense: </label>
                    <input name="defense" type="number" value={input.defense} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.defense && <p>{errors.defense}</p>}
                </div>

                <div>
                    <label htmlFor="speed">Speed: </label>
                    <input name="speed" type="number" value={input.speed} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.speed && <p>{errors.speed}</p>}
                </div>

                <div>
                    <label htmlFor="height">Height: </label>
                    <input name="height" type="number" value={input.height} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.height && <p>{errors.height}</p>}
                </div>

                <div>
                    <label htmlFor="weight">Weight: </label>
                    <input name="weight" type="number" value={input.weight} onChange={handleInputChange} placeholder="Enter value" />
                    {errors.weight && <p>{errors.weight}</p>}
                </div>

                <div className={style.selectorConteiner}>
                    <div>
                        <label>Type: </label>
                        <select name="type1"
                            onChange={handleInputChange}
                            value={input.type1}>
                            {allTypes?.map((type) => {
                                return (
                                    <option value={type.name} key={type.id}>{type.name}</option>
                                )
                            })}
                        </select>
                        {errors.type1 && <p>{errors.type1}</p>}
                    </div>

                    <div>
                        <select name="type2"
                            onChange={handleInputChange}
                            value={input.type2}>
                            {allTypes?.map((type) => {
                                return (
                                    <option value={type.name} key={type.id}>{type.name}</option>
                                )
                            })}
                        </select>
                        {errors.type2 && <p>{errors.type2}</p>}
                    </div>
                </div>

                <button className={style.bottonSubmit}>Create!</button>

            </form>
        </div>
    )

}

export default Form;