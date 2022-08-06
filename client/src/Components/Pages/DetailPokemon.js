import "../Css/DetailPokemon.css";
import { searchById, deletePokemon} from "../../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Loading from "../Loading/Gastly.gif";
import { useHistory } from "react-router-dom";
import Remove from "../Icons/remove";


function DetailPokemon(props) {
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.pokemonDetail);
    const history = useHistory();

    useEffect(() => {
        dispatch(searchById(props.match.params.id));
    }, [dispatch]);
    
    function removePokemon (id, name){
        dispatch(deletePokemon(id))
        alert(`Removing ${name}`)
        history.push("/home");
    }
    return (
        <div className="cmp-container-detail">
            {detail.length === 0 ? (
                <img src={Loading} alt="" className="loading" />
            ) : (
                <div className="cmp-detail">
                    <div className="cmp-detail-left">
                        <img
                            src={detail[0].sprite}
                            alt="Not Found"
                            className="cmp-detail_img"
                        />
                    </div>
                    <div className="cmp-detail-right">
                        <h2>{detail[0].name}</h2>
                        <p>Type: {detail[0].type.join(", ")}</p>
                        <p>Id: {detail[0].id} </p>
                        <div className="cmp-columns">
                            <div id="left">
                                <p>HP:</p>
                                <input type="range" className={"range"} value={detail[0].hp} /> <span className="cmp-number-range" > {detail[0].hp} </span>
                                <p>Attack: </p>
                                <input type="range" className={"range"} value={detail[0].attack} /><span className="cmp-number-range" > {detail[0].attack} </span>
                                <p>Defense: </p>
                                <input type="range" className={"range"} value={detail[0].defense} /> <span className="cmp-number-range" >{detail[0].defense} </span>
                            </div>
                            <div id="right">
                                <p>Speed:</p>
                                <input type="range" className={"range"} value={detail[0].speed} /> <span className="cmp-number-range" >{detail[0].speed} </span>
                                <p>Height:</p>
                                <input type="range" className={"range"} value={detail[0].height} /> <span className="cmp-number-range" >{detail[0].height} </span>
                                <p>Weight:</p>
                                <input type="range" className={"range"} value={detail[0].weight} /> <span className="cmp-number-range" >{detail[0].weight}  </span>
                            </div>
                        </div>
                        {detail[0].createdInDb ?
                        <div className="delete">
                            <button className="tooltip" onClick={e => (removePokemon(detail[0].id, detail[0].name))}>
                            <Remove />
                            <span className="tooltiptext">Remove</span>
                            </button>
                        </div>
                        : null} 
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPokemon;
