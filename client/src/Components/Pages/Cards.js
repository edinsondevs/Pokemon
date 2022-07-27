import React from 'react';
import '../Css/Cards.css'

// function Cards(data) {
    function Cards({name ,life,attack,defense,speed, height,weight,img }) {
        return (
            <div className="cmp-container-cards">
            { 
                    <div className="cmp-card" >
                        <h2>{name}</h2>
                        <img src={img} alt="Not Found" className="cmp-card_img" />
                        <p>HP: {life}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                        <p>Speed: {speed}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                    </div>
                // ))
            }
        </div>
    );
}

export default Cards;