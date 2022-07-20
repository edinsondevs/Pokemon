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

export const allPokemons = () => {
    return async (dispatch) => {
        let allPokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: 'GET_ALL_POKE',
            payload: allPokemons.data
        })
    }
}