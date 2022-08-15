const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const app = Router();
app.put('/:id', async (req, res) => {
    const { sprite, name, weight, height, hp, attack, defense, speed, type } = req.body
    const id = req.params.id

    await Pokemon.update({
        name,
        sprite,
        weight,
        height,
        hp,
        attack,
        defense,
        speed,
        type
    }, {
        where: {
            id: id,
        }
    });

    const pokemon_type = await Pokemon.findByPk(id, {
        include: [{
            model: Type,
            through: {
                attributtes: [name, id],
            }
        }]
    });

    let tipoPokemon = await Type.findAll({
        where: {
            name: type
        },
        attributes: ['id']        
    })

    await pokemon_type.setTypes(tipoPokemon)
    res.send(`El Pokemon ha sido modificado exitosamente`)

});

module.exports = app