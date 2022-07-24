import React from 'react'
import '../Css/Paginate.css';

// RENDERIZO TODO EL COMPOMENTE PAGINADO
function Paginate({ pokemonsPerPage, allPokemons, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav className="container-pagginate">
            <ul className="paginate">
                {pageNumbers &&
                    pageNumbers.map(n => (
                        <li key={n}>
                            <button onClick={() => paginate(n)} className="btn-number" >{n}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Paginate;