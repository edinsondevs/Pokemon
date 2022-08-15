import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cards from './Cards.js';
import Home  from './Home.js';
import Nav from './Nav.js';
import PokemonCreate  from './PokemonCreate.js';
import DetailPokemon  from './DetailPokemon.js';
import Page404  from './PageError.js';;

function Init() {
    return (
        <BrowserRouter>
            < >
                <Nav />               {/*  COMPONENT NAV fuera para que renderice siempre*/}
                <Switch >
                    <Route path="/home" component={Home} />
                    <Route exact path="/pokemons" component={Cards} />
                    <Route path="/create" component={PokemonCreate} />
                    <Route path="/pokemons/:id" component={DetailPokemon} />
                    <Route path='*' component={Page404}/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default Init;
