import '../Css/PokemonCreate.css'
import { useDispatch, useSelector } from 'react-redux'
import { typePokemons, createPokemons } from '../../Actions/Actions'
import { useEffect, useState } from 'react'
import { validateInputs } from '../Functions/ValidationsForm.js'
import { useHistory } from "react-router-dom";



function PokemonCreate() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(typePokemons())
    }, [dispatch])

    const type = useSelector((state) => state.typePoke)

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        sprite: "",
        name: "",
        weight: "",
        height: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        type: [],
    });

    const history = useHistory();

    const handleSubmit = (e) => {
        const validate = validateInputs(input.name, input.weight, input.height, input.hp, input.attack, input.defense, input.speed, input.type)

        if (validate) {
            // alert(input)
            dispatch(createPokemons(input))
            alert("Pokemon Created")
            history.push("/home");
        } else {
            alert("Complete the information")
        }
    }

    //****************      VALIDACION     *****/
    function validateForm(input) {
        let err = {}
        if (/[^ A-Za-z]/.test(input.name)) {  // NO PERMITE NUMEROS NI CARACTERES ESPECIALES      
            err = { name: "Special characters are not allowed" }
        } 
        if (input.name.length < 5) {
            err = { name: "You must enter at least 5 characters" }
        }
        if (input.weight.length > 2) {
            err = { weight: "Max Score 99" }
        }
        if (input.height.length > 2) {
            err = { height: "Max Score 99" }
        }
        if (input.hp.length > 2) {
            err = { hp: "Max Score 99" }
        }
        if (input.attack.length > 2) {
            err = { attack: "Max Score 99" }
        }
        if (input.defense.length > 2) {
            err = { defense: "Max Score 99" }
        }
        if (input.speed.length > 2) {
            err = { speed: "Max Score 99" }
        }

        return err
    }

    const handleNameChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validateForm({
            ...input,
            [e.target.name]: e.target.value,
        }))
    }
    const handleChange = (e) => {
        const limit = 2;
        setInput({
            ...input,
            [e.target.name]: e.target.value.slice(0, limit),
        });
        setErrors(validateForm({
            ...input,
            [e.target.name]: e.target.value,
        }))
    };

    const handleCheckbox = (e) => {
        if (input.type.includes(e.target.value)) {
            return "Pokemon Type exists";
        } else {
            setInput({
                ...input,
                type: [...input.type, e.target.value],
            });
        }
    };

    //****************      RENDERIZACION DEL COMPONENTE     *****/    
    return (
        <div className="container-form" >
            <form className="my-form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1 className="title-form">Create Pokemon!</h1>
                    <ul>
                        <li >
                            <div className="grid grid-2">
                                <input
                                    className='required-msg'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={input.name}
                                    onChange={handleNameChange}
                                    placeholder="Name"
                                />
                                {!errors.name ? null : <span className="cmp-form-valid_name">{errors.name}</span>}
                                <input
                                    className='required-msg'
                                    type="text"
                                    id="text"
                                    name="sprite"
                                    value={input.sprite}
                                    onChange={handleNameChange}
                                    placeholder="Image URL"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name="height"
                                    value={input.height}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Height"
                                />
                                {!errors.height ? null : <span className="cmp-form-valid_number_left">{errors.height}</span>}
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name="weight"
                                    value={input.weight}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Weight"
                                />
                                {!errors.weight ? null : <span className="cmp-form-valid_number_right">{errors.weight}</span>}
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name="hp"
                                    value={input.hp}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Hp"
                                />
                                {!errors.hp ? null : <span className="cmp-form-valid_number_left">{errors.hp}</span>}
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name='attack'
                                    value={input.attack}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Attack"
                                />
                                {!errors.attack ? null : <span className="cmp-form-valid_number_right">{errors.attack}</span>}
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name="defense"
                                    value={input.defense}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Defense"
                                />
                                {!errors.defense ? null : <span className="cmp-form-valid_number_left">{errors.defense}</span>}
                                <input
                                    className='required-msg'
                                    type="number"
                                    id="number"
                                    name='speed'
                                    value={input.speed}
                                    onChange={handleChange}
                                    min={1}
                                    max={99}
                                    placeholder="Speed"
                                />
                                {!errors.speed ? null : <span className="cmp-form-valid_number_right">{errors.speed}</span>}
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-1">
                                <label htmlFor="">Type Pokemon</label>                               
                                <ul className="type-poke-list">
                                    {type.map(( name, index) => {
                                        return ( 
                                        <label className='container'>
                                            <li key={index}>
                                                <div className="type-poke-list-item">
                                                    <div className="left-section">
                                                        <input
                                                            type="checkbox"
                                                            id={`custom-checkbox-${index}`}
                                                            name='type'
                                                            value={name}
                                                            onChange={handleCheckbox}
                                                        />
                                                        <div className="checkmark"></div>
                                                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </label>
                                        );
                                        })
                                    }                                    
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit"  >
                                    <span className="front" >Create</span>
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