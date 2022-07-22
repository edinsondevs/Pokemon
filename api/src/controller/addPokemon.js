const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const app = Router();

app.post('/', async (req, res) => {
    //   res.send('POST request to the homepage add pokemon')
    const {sprite, name, weight, height, hp, attack, defense, speed, life, type } = req.body

    if( !sprite || !name || !weight || !height || !hp || !attack || !defense || !speed || !life || !type ){
        res.status(400).send("Debe completar todos los datos")
    } else {
    try {
        const newPokemon = await Pokemon.create({
            sprite,
            name,
            weight,
            height,
            hp,
            attack,
            defense,
            speed,
            life            
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
    }}
})

module.exports = app