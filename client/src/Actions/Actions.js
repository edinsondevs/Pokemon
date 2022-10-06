import axios from 'axios';

//  ********************************************           RESET DEL STATE DE LOADING     ********************************************************************************/
export const resetPokemonDetail = (payload) => {
    return {
        type: 'RESET_POKEMON_DETAIL',
        payload
    }
}

//  *********************************           BUSQUEDA DE TODOS LOS TIPOS DE POKEMONS     ***********************************************************************/
export const typePokemons = () => {
    return async (dispatch) => {
        let type = await axios.get('/types');
        // let type = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: 'GET_TYPES_POKEMON',
            payload: type.data
        })
    }
}

//  *********************************           BUSQUEDA DE TODOS LOS POKEMONS     ****************************************************************************/
export const getAllPokemons = () => {
    return async (dispatch) => {
        let getAllPokemons = await axios.get('/pokemons');
        // let getAllPokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: 'GET_ALL_POKE',
            payload: getAllPokemons.data
        })
    }
}

//  ********************************************           FILTRO POR TYPO        ********************************************************************************/
export const searchByType = (payload) => {
    return {
        type: 'SEARCH_BY_TYPE',
        payload
    }
}

//  ********************************************           FILTRO POR CREACION    *******************************************************************************/        
export const searchByCreation = (payload) => {
    return {
        type: 'SEARCH_BY_CREATION',
        payload
    }
}

//  ********************************************           ORDENAMINETOS          ********************************************************************************/
export const getOrdering = (payload) => {
    return {
        type: 'GET_ORDERING',
        payload
    }
}

//  ********************************************           BUSQUEDA POR NOMBRE     ********************************************************************************/
export const searchByName = (payload) => {
    return async function (dispatch) {
        // let json = await axios.get('http://localhost:3001/pokemons?name=' + payload);
        let json = await axios.get('/pokemons?name=' + payload);
        let dataApi = json.data
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: dataApi       //dataApi
        })
    }
}

//  ********************************************           BUSQUEDA POR ID     ********************************************************************************/
export const searchById = (id) => {
    return async function (dispatch) {
        let pokemonDetail = await axios.get(`/pokemons/${id}`)
        // let pokemonDetail = await axios.get(`http://localhost:3001/pokemons/${id}`)
        let pokemonId = pokemonDetail.data
        return dispatch({
            type: 'SEARCH_BY_ID',
            payload: pokemonId
        })
    }
}

//  ********************************************           CREACION DE POKEMON     ********************************************************************************/
export const createPokemons = (payload) => {
    console.log(payload)
    return async function (dispatch) {
        await axios.post('/addpokemon', payload)
        // await axios.post('http://localhost:3001/addpokemon', payload)
    }
}
//  ********************************************           ELIMINACION DE POKEMON     ********************************************************************************/

export const deletePokemon = (id) => {
    return async function (dispatch) {
        // let newAllPokemons = await axios.delete(`http://localhost:3001/delete/${id}`)
        let newAllPokemons = await axios.delete(`/delete/${id}`)
        return dispatch({
            type: 'DELETE_POKEMON',
            payload: newAllPokemons
        })
    }
}

