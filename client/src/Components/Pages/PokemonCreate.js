import '../Css/PokemonCreate.css'
import { useDispatch, useSelector } from 'react-redux'
import { typePokemons } from '../../Actions/Actions'
import { useEffect } from 'react'


function PokemonCreate() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(typePokemons())
    },[dispatch])

    const type = useSelector((state) => state.typePoke)

    console.log(type)
    return (
        <div className="container-form">
            <form className="my-form">
                <div>
                    <h1>Create Pokemon!</h1>
                    <ul>
                        <li>
                            <div className="grid grid-2">
                                <input type="text" placeholder="Name" required />
                                <input type="text" placeholder="Image URL" required />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Height" required />
                                <input type="number" placeholder="Weight" required />
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-2">
                                <input type="number" placeholder="Hp" required />
                                <input type="number" placeholder="Attack" required />
                                <input type="number" placeholder="Defense" required />
                                <input type="number" placeholder="Speed" required />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Type Pokemon</label>
                            <select multiple="multiple">
                                {
                                    type.map((e,i) => (
                                        <option > {e} </option>
                                    ))                                    
                                } 
                            </select>
                        </li>
                        <li>
                            <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit" >
                                    {/* <span className="back">
                                        <img src="IMG_SRC" alt="" />
                                    </span> */}
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