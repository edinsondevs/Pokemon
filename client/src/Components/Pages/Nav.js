import { React } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Nav.css';

import Pikachu from '../Images/pikachu-header-right.png'
import Logo from '../Images/png-transparent-text-logo.png'
import Pokeball from '../Images/pokeball-left.png'

function Nav() {
    return (

        <div id="wrapper">
            <div id="header">
                {/* <p>This is the Header</p> */}
                <div className="cmp-nav">
                    <div className="shrink0">
                        <img src={Pokeball} alt="" height="100" width="100" />
                    </div>
                    <div className="grow1">
                        <img src={Logo} alt="" className="logo" />
                    </div>
                    <div className="shrink0">
                        <img src={Pikachu} alt="" height="100" width="100" />
                    </div>
                </div>
            </div>
            <div id="leftcolumn">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li>
                            <Link exact to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Pokemons</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Nav;