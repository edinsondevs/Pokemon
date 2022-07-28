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
        type: [],
    });

    const handleSubmit = (e) => {
        console.log(e.name)
        dispatch(createPokemons(input))
        alert("Pokemon Creado")
        // setInput({
        //     sprite: "",
        //     name: "",
        //     weight: "",
        //     height: "",
        //     hp: "",
        //     attack: "",
        //     defense: "",
        //     speed: "",
        //     type: [],
        // });
    }


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input)
    };

    const handleSelect = (e) => {
        if (input.type.includes(e.target.value)) {
            return "Diet Type exists";
        } else {
            setInput({
                ...input,
                type: [...input.type, e.target.value],
            });
        }
    };
    // console.log(input)


    //****************      RENDERIZACION DEL COMPONENTE     *****/    
    return (
        // <div className="container-form">
        //     <form action="" onSubmit={handleSubmit} className="my-form" >
        //         <div className="grid grid-2">
        //             <input type="text" name="name" id="" value={input.name} onChange={handleChange} />
        //             <input type="text" name="sprite" id="" value={input.sprite} onChange={handleChange} />
        //         </div>
        //         <div className="grid grid-2">
        //             <input type="number" placeholder="weight" name="weight" id="" value={input.weight} onChange={handleChange} min={1} max={99} />
        //             <input type="number" placeholder="height" name="height" id="" value={input.height} onChange={handleChange} min={1} max={99} />
        //             <input type="number" placeholder="hp" name="hp" id="" value={input.hp} onChange={handleChange} min={1} max={99} />
        //         </div>
        //         <div className="grid grid-2">
        //             <input type="number" placeholder="attack" name="attack" id="" value={input.attack} onChange={handleChange} min={1} max={99} />
        //             <input type="number" placeholder="defense" name="defense" id="" value={input.defense} onChange={handleChange} min={1} max={99} />
        //             <input type="number" placeholder='speed' name="speed" id="" value={input.speed} onChange={handleChange} min={1} max={99} />
        //         </div>
        //         {/* <input type="number" name="type" id="" onChange={handleSelect}/> */}
        //         <div className="grid grid-2">
        //             <select multiple="multiple" name='type' onChange={handleSelect} >
        //                 {
        //                     type.map((e, i) => (
        //                         <option key={i} > {e} </option>
        //                     ))
        //                 }
        //             </select>
        //         </div>
        //         <button className="btn-grid" type="submit" > enviar</button>
        //     </form>
        // </div>


        <div className="container-form">
            <form className="my-form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Create Pokemon!</h1>
                    <ul>
                        <li>
                            <div className="grid grid-2">
                                <input type="text" placeholder="Name" name="name"
                                    value={input.name} onChange={handleChange}
                                />
                                <input type="text" placeholder="Image URL" name="sprite" value={input.sprite} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Height" name="height" value={input.height} onChange={handleChange} min={1} max={99} />
                                <input type="number" placeholder="Weight" name="weight" value={input.weight} onChange={handleChange} min={1} max={99} />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Hp" name="hp" value={input.hp} onChange={handleChange} min={1} max={99} />
                                <input type="number" placeholder="Attack" name='attack' value={input.attack} onChange={handleChange} min={1} max={99} />
                                <input type="number" placeholder="Defense" name="defense" value={input.defense} onChange={handleChange} min={1} max={99} />
                                <input type="number" placeholder="Speed" name='speed' value={input.speed} onChange={handleChange} min={1} max={99} />

                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Type Pokemon</label>
                            <select multiple="multiple" name='type' onChange={handleSelect} >
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