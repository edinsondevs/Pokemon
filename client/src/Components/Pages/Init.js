import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cards from './Cards.js';
import Home  from './Home.js';
import Nav from './Nav.js';
import PokemonCreate  from './PokemonCreate.js';
import DetailPokemon  from './DetailPokemon.js';
import About  from './About.js';
import Page404  from './Page404.js';

function Init() {
    return (
        <BrowserRouter>
            < >
                <Nav />               {/*  COMPONENT NAV */}
                <Switch >
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/pokemons" component={Cards} />
                    <Route exact path="/create" component={PokemonCreate} />
                    <Route exact path="/pokemons/:id" component={DetailPokemon} />
                    <Route exact path="/about" component={About} />
                    <Route path='*' component={Page404}/>
                </Switch>
                {/* <Footer /> */}
            </>
        </BrowserRouter>
    );
}

export default Init;
