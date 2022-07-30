const { Router } = require('express');
// const { Pokemon, Type } = require('../db.js');


const app = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typeRoutes = require('../controller/typesPokemon.js');
const allPokemons = require('../controller/allPokemon.js');
const addPokemons = require('../controller/addPokemon.js');

//*************************************************************************************************************************************************************/
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.use('/types', typeRoutes)
app.use('/pokemons', allPokemons)
app.use('/pokemons', addPokemons);


//*************************************************************************************************************************************************************/

    module.exports = app;
