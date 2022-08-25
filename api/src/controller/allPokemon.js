const { Router } = require('express');
const { Op, QueryTypes } = require('sequelize');
const { getAllPoke, poke } = require('../controller/pokemonController.js');
const { URL_POKEMON } = require('../utils/GlobalConst.js');
const axios = require('axios');

const app = Router();

//  *****************     BUSQUEDA DE TODOS LOS POKEMONS PARA MOSTRAR EN LA PRINCIPAL    ****************************************************************************/
app.get('/', async (req, res) => {
    const name = req.query.name
    const allPokemons = await getAllPoke();
    if (name) {
        try {
            const pokemonName = await allPokemons.filter(e => e.name.toLowerCase() === name.toLowerCase());
            if (pokemonName.length === 0) pokemonName.push("NotFound");  // SI EL POKEMON NO EXISTE PUSHEO EL STRING NOTFOUND
            pokemonName.length > 0 &&
                res.status(200).json(pokemonName)          // MANDO EL MENSAJE TODO EL RESULTADO ENCONTRADO
        } catch (error) {

            const pokeDb = await Pokemon.findAll({
                where: {
                    name: {
                        [Op.eq]: name
                    }
                },
                include: Type
            });

            const objPokeDb = pokeDb.map(pokeDb => {
                return {
                    id: pokeDb.id,
                    name: pokeDb.name,
                    hp: pokeDb.hp,
                    attack: pokeDb.attack,
                    defense: pokeDb.defense,
                    speed: pokeDb.speed,
                    height: pokeDb.height,
                    weight: pokeDb.weight,
                    sprite: pokeDb.sprite,
                    type: pokeDb.types?.map(e => e.name),
                    createdInDb: pokeDb.createdInDb
                };
            })
            res.status(200).json(objPokeDb)
        }
    }
    else {

        try {
            return res.status(200).send(await getAllPoke());
        } catch (error) {
            console.log('entro error');
            return res.status(404).send('Pokemons not found');
        }
    }
})


app.get('/new', async (req, res) =>{
    const pokemon = await poke()
    try{
        return res.send(pokemon)
    }catch(error){
        console.log(error);
    }

})


//  ************************   BUSQUEDA DE POKEMON POR ID     ********************************************************************************/
/* app.get('/:id', async (req, res) => {
    const { id } = req.params;
    //-------------   BUSQUEDA CON ASYNC AWAIT       
     const allPokemons = await getAllPoke();
    try {
            const pokemonId = await allPokemons.filter(e => e.id == id)
            pokemonId.length ?
                res.status(200).json(pokemonId) :
                res.status(404).send('Pokemon not found')
        } catch (error) {
        console.log(error);
    } 
}) */

app.get('/:id', (req, res) => {
    const { id } = req.params;
    //-------------   BUSQUEDA CON PROMESAS
    getAllPoke()
    .then(allPokemons => {
        const pokemonId = allPokemons.filter(e => e.id == id)
        console.log("Entre al status 200 con promesas")
        pokemonId.length ?
            res.status(200).json(pokemonId) :
            res.status(404).send(`Pokemon not found ${id}`)
    })
    .catch(error => {
        console.log(error);
    })
})

module.exports = app