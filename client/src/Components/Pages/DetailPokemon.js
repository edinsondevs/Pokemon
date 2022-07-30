import "../Css/DetailPokemon.css";
import { searchById } from "../../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Gastly.gif";
import { useHistory } from "react-router-dom";
import Home from "../Icons/Home";

function DetailPokemon(props) {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(searchById(props.match.params.id));
    }, [dispatch]);

    function handleClick() {
        history.push("/home");
    }
    const detail = useSelector((state) => state.pokemonDetail);

    return (
        <div className="cmp-container-detail">
            {/* <h2>{}Pagina del detalle de cada pokemon</h2> */}
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
                        <p>HP:</p>
                        <input type="range" className={"range"} value={detail[0].hp} />
                        <p>Attack: </p>
                        <input type="range" className={"range"} value={detail[0].attack} />
                        <p>Defense: </p>
                        <input type="range" className={"range"} value={detail[0].defense} />
                        <p>Speed:</p>
                        <input type="range" className={"range"} value={detail[0].speed} />
                        <p>Height:</p>
                        <input type="range" className={"range"} value={detail[0].height} />
                        <p>Weight:</p>
                        <input type="range" className={"range"} value={detail[0].weight} />
                        <button type="button" onClick={handleClick}>
                            <Home />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPokemon;
