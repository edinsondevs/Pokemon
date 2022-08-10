const { Router } = require('express');
const { Pokemon, Type, pokemon_type } = require('../db');
const { QueryTypes } = require('sequelize');

const app = Router();
app.put('/:id', async (req, res) => {
    const { sprite, name, weight, height, hp, attack, defense, speed, type } = req.body
    const id = req.params.id
    
    const modifiedPoke = await Pokemon.update({
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
    // include: Type,
    let tipoPokemon = await Type.findAll({
        attributes: ['id'],
        where: {
            name: type
        }
    })
    // console.log(tipoPokemon[0].id) 
    console.log(tipoPokemon, id) 
    pokemon_type.update({ typeId: tipoPokemon }, {
        where: {
            pokemonId: id
        }
    });
    
    console.clear()
    res.send(modifiedPoke)
    // Type.update({ typeId: tipoPokemon[0].id }, {
        //     where: {
            //         pokemonId: id
            //     }
            // });
            
            // pokemon_type.destroy({
                //     where: {
                    //       pokemonId: id
                    //     }
                    //   });
                    
                    // await sequelize.query(`UPDATE pokemon_type set "typeId" = 11 WHERE 
                    // "pokemonId" = ${id} and "typeId" = 15`)
                    
                    // modifiedPoke.addType(tipoPokemon)
                    // res.send(`The pokemon ${modifiedPoke} has been modified successfully`);
});

module.exports = app