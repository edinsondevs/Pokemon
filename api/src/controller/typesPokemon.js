const { Router } = require('express');
const axios = require('axios'); 
const { Type } = require('../db.js');
const { URL_POKEMON_TYPE } = require('../utils/GlobalConst.js');

const app = Router();

app.get('/', async (req, res) => {
    try{
        const typeApi = await axios.get(URL_POKEMON_TYPE);              //BUSCO TODOS LOS TIPOS DE POKEMON EN LA API
        const pokeTypes = typeApi.data.results.map(e => e.name)
        pokeTypes.forEach(data => {
            Type.findOrCreate({                                         //CON EL RESULTADO BUSCO EN LA DB Y SI NO EXISTE LO CREO
                where: { name: data }
            })
        })
        const allTypes = await Type.findAll({                           //BUSCO TODO LO QUE TENGO EN LA DB, PERO SOLO EL CAMPO NAME DE LA TABLA
            attributes: ["name"]
        })
        const allTypesPoke = allTypes.map(e => e.name)
        // console.log(allTypesPoke)
        return res.status(200).send(allTypesPoke)
    }catch(error){
        return res.status(400).send('No se encontraron tipos')
    }
});

module.exports = app;