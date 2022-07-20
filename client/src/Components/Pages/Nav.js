import { React } from 'react';
import { NavLink } from 'react-router-dom';

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
                {/* <div className="container_nav"> */}
                    {/* <div className="cmp-nav botones"> */}
                        <nav className="navbar">
                            <ul className="navbar-nav">
                                <li><NavLink exact to="/home">Home</NavLink></li>
                                <li><NavLink to="/create">Create Pokemons</NavLink></li>
                                <li><NavLink to="/about" >About</NavLink></li>
                                {/* <li><SearchBar /></li>  */}
                            </ul>
                        </nav>
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>

    );
}

export default Nav;