const { Router } = require('express');
const { Op, QueryTypes  } = require('sequelize');
const { getAllPoke } = require('../controller/pokemonController.js');

const app = Router();

// BUSCO TODOS LOS POKEMONES PARA MOSTRAR EN LA PRINCIPAL
app.get('/', async (req, res) => {
    const { name } = req.query
    const allPokemons = await getAllPoke();
    if (name) {
        try {
            // if (name) {
            const pokemonName = await allPokemons.filter(e => e.name == name);
            if (pokemonName.length === 0) pokemonName.push("NotFound");  // SI EL POKEMON NO EXISTE PUSHEO EL STRING NOTFOUND
            pokemonName.length > 0 ?
                res.status(200).json(pokemonName) :         // MANDO EL MENSAJE TODO EL RESULTADO ENCONTRADO
                res.status(200).json(pokemonName)       // SI EL POKEMON NO EXISTE MANDO EL MENSAJE NOT FOUND
            // }
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

// BUSCO LOS POKEMONES POR ID
app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const allPokemons = await getAllPoke();
    try {
        if (id) {
            const pokemonId = await allPokemons.filter(e => e.id == id);
            pokemonId.length ?
                res.status(200).json(pokemonId) :
                res.status(404).send('Pokemon not found')
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = app