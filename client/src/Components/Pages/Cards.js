import React from 'react';
import '../Css/Cards.css'

// function Cards(data) {
    function Cards({name ,life,attack,defense,speed, height,weight,img }) {
        return (
            <div className="cmp-container-cards">
            { 
                    <div className="cmp-card" >
                        <h2>{name}</h2>
                        <p>{life}</p>
                        <p>{attack}</p>
                        <p>{defense}</p>
                        <p>{speed}</p>
                        <p>{height}</p>
                        <p>{weight}</p>
                        <img src={img} alt="Not Found" className="cmp-card_img" />
                    </div>
                // ))
            }
        </div>
    );
}

export default Cards;