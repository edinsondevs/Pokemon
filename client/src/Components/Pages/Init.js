import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cards from './Cards.js';
import Home  from './Home.js';
import Nav from './Nav.js';
import PokemonCreate  from './PokemonCreate.js';
import DetailPokemon  from './DetailPokemon.js';
// import Footer from './Footer.js';

function Init() {
    return (
        <BrowserRouter>
            < >
                <Nav />               {/*  COMPONENT NAV */}
                <Switch >
                    <Route path="/home" component={Home} />
                    <Route path="/pokemons" component={Cards} />
                    <Route path="/create" component={PokemonCreate} />
                    <Route exact path="/pokemons/:id" component={DetailPokemon} />
                </Switch>
                {/* <Footer /> */}
            </>
        </BrowserRouter>
    );
}

export default Init;
