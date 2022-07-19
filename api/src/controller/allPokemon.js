const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { URL_POKEMON, URL_POKEMON_NAME_OR_ID } = require('../utils/GlobalConst');
const { getAllPoke } = require('../controller/pokemonController.js');

const app = Router();

// BUSCO TODOS LOS POKEMONES PARA MOSTRAR EN LA PRINCIPAL
app.get('/', async (req, res) => {
    //   res.send('Buscar los pokemons')
    const { name } = req.query
    const allPokemons = await getAllPoke();
    console.log(name)
    if (name) {
        try {
            // if (name) {
                const pokemonName = await allPokemons.filter(e => e.name == name);
                pokemonName.length ?
                    res.status(200).json(pokemonName) :
                    res.status(404).send('Pokemon not found')
            // }
        } catch (error) {
            console.log(error);
        }
    } else{

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

app.post('/', async (req, res) => {
    //   res.send('POST request to the homepage')
    // const {img, name, weight, height, hp, attack, defense, speed, life, createdInDb } = req.body

    // console.log(name)
    // await Pokemon.create({
    //     img,
    //     name,
    //     weight,
    //     height,
    //     hp,
    //     attack,
    //     defense,
    //     speed,
    //     life,
    //     createdInDb
    // })
})



module.exports = app