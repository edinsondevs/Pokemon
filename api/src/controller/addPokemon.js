const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const app = Router();

app.post('/', async (req, res) => {
    //   res.send('POST request to the homepage add pokemon')
    const {img, name, weight, height, hp, attack, defense, speed, life, type, createdInDb } = req.body
    try {
        const newPokemon = await Pokemon.create({
            img,
            name,
            weight,
            height,
            hp,
            attack,
            defense,
            speed,
            life,
            createdInDb
        })

    let tipoPokemon = await Type.findAll({
        where: {
            name: type
        }
    })
    newPokemon.addType(tipoPokemon)
    res.send("El Pokemon ha sido creado exitosamente")
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = app