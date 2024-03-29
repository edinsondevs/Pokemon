const axios = require('axios');
const {Pokemon,Type} = require('../db');
const {URL_POKEMON} = require('../utils/GlobalConst');


// 1 TRAE TODOS LOS OBJETOS DE LA API DE A CUANTO SEA QUE LOS LLAME DESDE LA URL
const getPokeapi = async () => { //Llamado doble a la api y a su suburl para traer todos los datos
    try {       
    const firstApiPage = await axios.get(URL_POKEMON);                  //  Consulto los primeros 20 pokemons de la api
    const secondApiPage = await axios.get(firstApiPage.data.next);      //  Consulto los siguientes 20 pokemons de la api a partir de la primera busqueda
    const allPokemons = firstApiPage.data.results.concat(secondApiPage.data.results);   //  Concateno los resultados de la primera y segunda busqueda   

    const PokemonProps = await Promise.all(                                   //  Consulto los datos de cada pokemon de la api
        allPokemons.map(async e=>{
            const pokemon = await axios.get(e.url);
            return{
                id: pokemon.data.id,
                sprite: pokemon.data.sprites.other.home.front_default,
                name: pokemon.data.name,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                type: pokemon.data.types.map(e=> e.type.name),
                createdInDb: false
            }
        }) 
    ) 
    return PokemonProps;
        
    } catch (error) {
        console.log(error);
        return error;
    }
};

const poke = async () => {
 const data = await axios.get(URL_POKEMON);
 const data2 = data.data.results;

 return (data2[5].name)
}




// 2 TRAE LOS POKEMONES DE LA BASE DE DATOS
const getPokedb = async () => {

    const pokeDb = await Pokemon.findAll({
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
    try {
        return objPokeDb
    } catch (err) {
        console.log(err);
    }
}



// 3 UNION DE TODOS LOS POKEMONES DE API Y BASE DE DATOS
//me permite unir el array que me devuelve la pokeapi (40) pokemons + los pokemons creados en la DB pokemons

const getAllPoke = async () => {
    try {
        const apiPokeData = await getPokeapi();
        const dbPokeData = await getPokedb();
        return [...dbPokeData, ...apiPokeData ];        
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = {
    getAllPoke,
    poke
}