const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type } = require('../db.js');
const { Op } = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
<<<<<<< HEAD


const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//*************************************************************************************************************************************************************/
// GET https://pokeapi.co/api/v2/type
/*******************************                  BUSQUEDA DE LOS TIPOS DE POKEMONES           ****************************************************************/
=======
const typeRoutes = require('../controller/typesPokemon.js');

const app = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
app.use('/types', typeRoutes)
//*************************************************************************************************************************************************************/
// GET https://pokeapi.co/api/v2/type
/*******************************                  BUSQUEDA DE LOS TIPOS DE POKEMONES           ****************************************************************/
/*
>>>>>>> 288ba24 (PI Pokemon)
app.get('/types', async (req, res) => {
    try {
        const typeApi = await axios.get('https://pokeapi.co/api/v2/type')
        const pokeTypes = typeApi.data.results.map(e => e.name)
        pokeTypes.forEach(data => {
            Type.findOrCreate({
                where: { name: data }
            })
        })
        const allTypes = await Type.findAll()
        res.send(allTypes)
    } catch (error) {
        console.log(error)
    }
})

//*************************************************************************************************************************************************************/
// GET https://pokeapi.co/api/v2/pokemon/{name}
/*******************************                  BUSQUEDA DE POKEMON POR NOMBRE           ****************************************************************/
<<<<<<< HEAD

=======
/*
>>>>>>> 288ba24 (PI Pokemon)
app.get('/pokemon', async (req, res) => {
    const name = req.query.name;

    /* BUSQUEDA EN LA API */
    // const searchApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // const dataApi = searchApi.data
    // const respApi = {
    //     id: dataApi.id,
    //     img: dataApi.sprites.other.dream_world.front_default,
    //     name: dataApi.name,
    //     weight: dataApi.weight,
    //     height: dataApi.height,
    //     types: dataApi.types.map(e => e.type.name),
    //     hp: dataApi.stats[0].base_stat,
    //     attack: dataApi.stats[1].base_stat,
    //     defense: dataApi.stats[2].base_stat,
    //     speed: dataApi.stats[5].base_stat,
    // }
<<<<<<< HEAD

=======
/*
>>>>>>> 288ba24 (PI Pokemon)
    const dataDb = await Pokemon.findAll({
        attributes: [
        "id",
        "img",
        "name",
        "weight",
        "height",
        "hp",
        "attack",
        "defense",
        "speed",        
        "createdInDb"],
        where: {
            name: {
                [Op.eq]: name,
            }
        },
        include: {
            model: Type,
            attributes: ["name"]
        }
    }) 
    // console.log(dataDb); 
    // console.log(dataDb);
    // const dataTotal = dataDb.concat(respApi)
    // res.send(respApi)
    res.send(dataDb)  // PARA VALIDAR LOS DATOS QUE ME ESTA TRAYENDO
    // try {
        // res.send(dataTotal)  // PARA VALIDAR LOS DATOS QUE ME ESTA TRAYENDO
    // } catch (error) {
        // res.status(400).send("No existe el Pokemon ingresado, Ingrese uno nuevo")
    // }


    // try {
    //     const apiURL = await axios.get(
    //       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
    //     ); // Este get me da un objeto con dos propiedades, name y url
    //     const totalReq = await apiURL.data.results.map(async (el) => {
    //       // en esa url yo vuelve a hacer una request y allí tengo todos los datos que necesito
    //       // console.log(el)
    //       const PokeURL = (await axios.get(el.url)).data;
    //       // console.log('SOY AL INFO DE LA API',PokeURL.stats)
    //       // console.log('SOY AL INFO DE LA API',PokeURL.types)
    //       return {
    //         id: PokeURL.id,
    //         img: PokeURL.sprites.other.dream_world.front_default,
    //         name: el.name,
    //         type: PokeURL.types.map(e=> e.type.name),
    //         hp: PokeURL.stats[0].base_stat,
    //         attack: PokeURL.stats[1].base_stat,
    //         defense: PokeURL.stats[2].base_stat,
    //         speed: PokeURL.stats[5].base_stat,
    //         height: PokeURL.height,
    //         weight: PokeURL.weight,
    //       };
    //     });
    //     const MainInfoPoke = await Promise.all(totalReq);
    //     //   console.log(MainInfoPoke);
    //       return MainInfoPoke;

    //     } catch (error) {
    //       console.log(error)
    //     }
    // };
}),




    // GET https://pokeapi.co/api/v2/pokemon
    // GET https://pokeapi.co/api/v2/pokemon/{id}

<<<<<<< HEAD

=======
*/
>>>>>>> 288ba24 (PI Pokemon)

    module.exports = app;
