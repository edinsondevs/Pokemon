const initialState = {
    typePokemons: [],

}
export default function reducer (state = initialState, action) {

    switch (action.type) {        
        case 'GET_TYPES_POKEMON':            
            return {
                ...state,
                typePokemons: action.payload
            }

        default:
            return state
    }
}