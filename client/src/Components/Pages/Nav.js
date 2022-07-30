import { React } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Nav.css';

// import Pikachu from '../Images/pikachu-header-right.png'
import Pikachu from '../Images/top-pikachu-2.gif'
import Logo from '../Images/png-transparent-text-logo.png'
// import Pokeball from '../Images/pokeball-left.png'
import Pokeball from '../Images/pokemon-pokeball.gif'

function Nav() {
    return (

        <div id="wrapper">
            <div id="header">
                {/* <p>This is the Header</p> */}
                <div className="cmp-nav">
                    <div className="shrink0">
                        <img src={Pokeball} alt="" height="100"  />
                    </div>
                    <div className="grow1">
                    <h1 class="title" data-text="Pokemon">Pokemon</h1>
                        {/* <img src={Logo} alt="" className="logo" /> */}
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
                            <Link exact to="/home" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/create" className="nav-link">Create Pokemons</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Nav;