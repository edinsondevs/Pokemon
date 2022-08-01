import React from 'react';
import { useDispatch } from 'react-redux';
import '../Css/Cards.css'
import { searchById } from '../../Actions/Actions'
import { Link } from 'react-router-dom';
import More from '../Icons/Lupa';

function Cards({ name, img, type, id, createdInDb }) {
    const dispatch = useDispatch()

    const handleDetail = (id, createdInDb) => {
        // console.log("id: " + id + ' db: ' + createdInDb);
        if (createdInDb === true) {
            console.log(`envio el dispatch como ${createdInDb} y el id: ${id}`)
            dispatch(searchById(id, createdInDb))
        } else {
            console.log(`envio el dispatch como ${createdInDb} y el id: ${id}`)
            createdInDb = false
            console.log("Asignando false a bd: "+createdInDb)
            // dispatch(searchById(id, createdInDb))
            dispatch(searchById(id))
        }

    }

    return (
        <div className="cmp-container-cards">
            {
                <div className="cmp-card" onClick={(e) => handleDetail(id, createdInDb)} >
                    <h2>{name}</h2>
                    <img src={img} alt="Not Found" className="cmp-card_img" />
                    <p>Type: {type.join(', ')}</p>
                    <Link to={`/pokemons/${id}`} >
                        <More />
                    </Link>
                </div>
                // ))
            }
        </div>
    );
}

export default Cards;