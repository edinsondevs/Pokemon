const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const app = Router();

//  *****************    RUTA DE CREACION DEL POKEMON     ********************************************************************************/

app.post('/', async (req, res) => {
    const {sprite, name, weight, height, hp, attack, defense, speed, type } = req.body

    if( !sprite || !name || !weight || !height || !hp || !attack || !defense || !speed || !type ){
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
        })

//  **********************     BUSCA LOS TIPOS DE POKEMON RECIBIDOS PARA OBTENER EL ID    ********************************************************************************/

let tipoPokemon = await Type.findAll({
    where: {
        name: type
    }
})

//  **********************     ASOCIA LOS TIPOS DE POKEMON RECIBIDOS AL POKEMON CREADO     ********************************************************************************/
    newPokemon.addType(tipoPokemon)    
    res.send(`El Pokemon ha sido creado exitosamente`)
    } catch (error) {
        res.status(404).send(error.message)
    }}
})

module.exports = app