import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cards from './Cards.js';
import Home  from './Home.js';
import Nav from './Nav.js';
import PokemonCreate  from './PokemonCreate.js';
import DetailPokemon  from './DetailPokemon.js';
import About  from './About.js';
// import Footer from './Footer.js';

function Init() {
    return (
        <BrowserRouter>
            < >
                <Nav />               {/*  COMPONENT NAV */}
                <Switch >
                    <Route path="/home" component={Home} />
                    <Route exact path="/pokemons" component={Cards} />
                    <Route path="/create" component={PokemonCreate} />
                    <Route path="/pokemons/:id" component={DetailPokemon} />
                    <Route path="/about" component={About} />
                </Switch>
                {/* <Footer /> */}
            </>
        </BrowserRouter>
    );
}

export default Init;
