import React from 'react'
import Not_Found from '../Loading/Not Found.png'
import '../Css/NotFound.css';

function NotFound() {
    return ( 
        <div className='cmp-notFound'>
        <h1 className='cmp-notFound_text '>Not found</h1>
        <img src={Not_Found} alt="" className="loading" />
        </div>
     );
}

export default NotFound;