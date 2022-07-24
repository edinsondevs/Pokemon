import axios from 'axios';

export const typePokemons = () => {
    return async (dispatch) => {
        let type = await axios.get('http://localhost:3001/types');
        return dispatch({
            type:'GET_TYPES_POKEMON',
            payload: type.data
        })
    }
    
}

export const getAllPokemons = () => {
    return async (dispatch) => {
        let getAllPokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: 'GET_ALL_POKE',
            payload: getAllPokemons.data
        })
    }
}

export const searchByType = (payload) => {
    console.log(payload)
    return {
        type: 'SEARCH_BY_TYPE',
        payload,
    }
}

export const searchByCreation = (payload) => {
    return { 
        type: 'SEARCH_BY_CREATION',
        payload
    }
}

export const getOrdering = (payload) => {
    return {
        type: 'GET_ORDERING',
        payload
    }
}

export const searchByName = (payload) => {
    return async function (dispatch) {
        let json = await axios.get('https://pokeapi.co/api/v2/pokemon/'+payload);
        let dataApi = json.data
        const getPoke = {
            id: dataApi.id,
            sprite: dataApi.sprites.other.home.front_default,
            name: dataApi.name,
            hp: dataApi.stats[0].base_stat,
            attack: dataApi.stats[1].base_stat,
            defense: dataApi.stats[2].base_stat,
            speed: dataApi.stats[5].base_stat,
            height: dataApi.height,
            weight: dataApi.weight,
            type: dataApi.types.map(e => e.type.name)
        }
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: getPoke
        })
    }
}