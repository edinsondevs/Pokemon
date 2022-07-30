import axios from 'axios';

export const typePokemons = () => {
    return async (dispatch) => {
        let type = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: 'GET_TYPES_POKEMON',
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
    return {
        type: 'SEARCH_BY_TYPE',
        payload
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
        let json = await axios.get('http://localhost:3001/pokemons?name=' + payload);
        let dataApi = json.data
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: dataApi       //dataApi
        })
    }
}

export const searchById = (id, createdInDb) => {
    return async function (dispatch) {
        let URL = ''
        if (id && createdInDb) {
            URL = `http://localhost:3001/pokemons/${id}?createdInDb=true`
        }
        if (id && !createdInDb) {
            URL = `http://localhost:3001/pokemons/${id}`
        }
        let pokemonDetail = await axios.get(URL)
        let pokemonId = pokemonDetail.data
        return dispatch({
            type: 'SEARCH_BY_ID',
            payload: pokemonId
        })
    }
}

export const createPokemons = (payload) => {
    console.log(payload)
    return async function (dispatch) {
        await axios.post('http://localhost:3001/pokemons', payload)
    }
}