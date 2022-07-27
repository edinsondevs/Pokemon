import '../Css/PokemonCreate.css'
import { useDispatch, useSelector } from 'react-redux'
import { typePokemons, createPokemons } from '../../Actions/Actions'
import { useEffect, useState } from 'react'


function PokemonCreate() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(typePokemons())
    }, [dispatch])

    const type = useSelector((state) => state.typePoke)

    const [input, setInput] = useState({
        sprite: "",
        name: "",
        weight: "",
        height: "",
        hp: "",
        attack: "",
        "defense": "",
        "speed": "",
        "life": "",
        type: [],
    });

    const handleSubmit = (e) => {

        setInput({
            sprite: "",
            name: "",
            weight: "",
            height: "",
            hp: "",
            attack: "",
            "defense": "",
            "speed": "",
            "life": "",
            type: [],
        });
        dispatch(createPokemons(input))

    }


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        // setErrors(validateForm({
        //   ...input,
        //   [e.target.name]: e.target.value,
        // }))
    };






    //****************      RENDERIZACION DEL COMPONENTE     *****/    
    return (
        <div className="container-form">
            <form className="my-form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Create Pokemon!</h1>
                    <ul>
                        <li>
                            <div className="grid grid-2">
                                <input type="text" placeholder="Name" onChange={handleChange} />
                                <input type="text" placeholder="Image URL" />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Height" />
                                <input type="number" placeholder="Weight" />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Hp" name={"hp"} />
                                <input type="number" placeholder="Attack" name={'attack'} value={input.attack} />
                                <input type="number" placeholder="Defense" name={"defense"} />
                                <input type="number" placeholder="Speed" name={'speed'} />

                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Type Pokemon</label>
                            <select multiple="multiple">
                                {
                                    type.map((e, i) => (
                                        <option key={i} > {e} </option>
                                    ))
                                }
                            </select>
                        </li>
                        <li>
                            <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit" >
                                    <span className="front">Create</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default PokemonCreate;