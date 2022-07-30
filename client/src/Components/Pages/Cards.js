import React from 'react';
import { useDispatch } from 'react-redux';
import '../Css/Cards.css'
import { searchById } from '../../Actions/Actions'
import { Link } from 'react-router-dom';
// import  Lupa  from '../Images/more.png';
import More from '../Icons/Lupa';

function Cards({ name, img, type, id, createdInDb }) {
    // function Cards(props) {
    const dispatch = useDispatch()

    const handleDetail = (id, createdInDb) => {
        if (createdInDb) {
            dispatch(searchById(id, createdInDb))
        } else {
            createdInDb = false
            dispatch(searchById(id, createdInDb))
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