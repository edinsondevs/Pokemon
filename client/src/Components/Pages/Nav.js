import { React } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Nav.css';

import Pikachu from '../Images/top-pikachu-2.gif'
import Pokeball from '../Images/pokemon-pokeball.gif'

function Nav() {
    return (
        <div id="wrapper">
            <div id="header">
                <div className="cmp-nav">
                    <div className="shrink0">
                        <img src={Pokeball} alt="" height="100"  />
                    </div>
                    <div className="grow1">
                        <img src={"https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png"} className="pokemon-logo" alt="" />
                    </div>
                    <div className="shrink0">
                        <img src={Pikachu} alt="" height="150" weight="200"  />
                    </div>
                </div>
            </div>
            <div id="leftcolumn">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/create" className="nav-link">Create Pokemons</Link>
                        </li>
                        {/* <li>
                            <Link to="/about" className="nav-link">About</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;