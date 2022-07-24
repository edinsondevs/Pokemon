import '../Css/PokemonCreate.css'

function PokemonCreate() {
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
                                {/* <label htmlFor="">Statistics</label> */}
                                <input type="number" placeholder="Hp" required />
                                <input type="number" placeholder="Attack" required />
                                <input type="number" placeholder="Defense" required />
                                <input type="number" placeholder="Speed" required />
                            </div>
                        </li>
                        <li>
                            <select multiple="multiple">
                                <option selected disabled>-- Choose one or more types --</option>
                                <option>Request Quote</option>
                                <option>Send Resume</option>
                                <option>Other</option>
                            </select>
                        </li>
                        <li>
                            <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit" >
                                    <span className="back">
                                        <img src="IMG_SRC" alt="" />
                                    </span>
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