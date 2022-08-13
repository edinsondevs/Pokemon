const { Router } = require('express');


const app = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typeRoutes = require('../controller/typesPokemon.js');
const allPokemons = require('../controller/allPokemon.js');
const addPokemons = require('../controller/addPokemon.js');
const deletePokemons = require('../controller/deletePokemon.js');
const updatePokemons = require('../controller/updatePokemon.js');

//*************************************************************************************************************************************************************/
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.use('/types', typeRoutes)
app.use('/pokemons', allPokemons)
app.use('/pokemons', addPokemons)
app.use('/delete', deletePokemons);
app.use('/update', updatePokemons);


//*************************************************************************************************************************************************************/

    module.exports = app;
