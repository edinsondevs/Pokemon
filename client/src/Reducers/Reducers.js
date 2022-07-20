const initialState = {
    typePoke: [],
    allPokemons: []

}
export default function reducer (state = initialState, action) {

    switch (action.type) {        
        case 'GET_TYPES_POKEMON':            
            return {
                ...state,
                typePokemons: action.payload
            }

        case 'GET_ALL_POKE':    
            return{
                ...state,
                allPokemons: action.payload
            }
            
            
            
    default:
        return state
    }
}

