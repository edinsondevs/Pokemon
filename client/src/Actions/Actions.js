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