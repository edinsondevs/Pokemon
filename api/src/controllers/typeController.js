const axios = require('axios'); 
const { Type } = require('../db.js');
const { URL_POKEMON_TYPE } = require('../utils/GlobalConst.js');


//************************************************************************************************
/**       BUSQUEDA Y CARGA DE LOS TIPOS DE POKEMON ENCONTRADOS EN LA API            */
const getTypesTotal = async () => {
    try {
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
        return allTypesPoke                                             //RETORNO UN ARRAY CON LO ENCONTRADO EN LA DB

    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    getTypesTotal,
}