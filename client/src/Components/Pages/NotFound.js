import React from 'react'
import Not_Found from '../Loading/Not Found.png'
import '../Css/NotFound.css';

// --------------------------------         PAGINA DE DATO NO ENCONTRADO        --------------------------------
function NotFound() {
    return (
        <div className='cmp-notFound'>
            <img src={Not_Found} alt="" className="loading" />
            <h1 className='cmp-notFound_text '>Not found</h1>
        </div>
    );
}

export default NotFound;