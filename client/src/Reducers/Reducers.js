const initialState = {
    typePoke: [],
    allPokemons: [],
    clonPokemons: [],
    pokemonDetail: []

}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        //  *********************************           BUSQUEDA DE TODOS LOS POKEMONS     ****************************************************************************/
        case 'GET_ALL_POKE':
            return {
                ...state,
                allPokemons: action.payload,
                clonPokemons: action.payload
            }
        //  *********************************           BUSQUEDA DE TODOS LOS TIPOS DE POKEMONS     ***********************************************************************/
        case 'GET_TYPES_POKEMON':
            return {
                ...state,
                typePoke: action.payload
            }

        //  ********************************************           FILTRO POR TYPO        ********************************************************************************/

        case 'SEARCH_BY_TYPE':
            let searchByType = state.clonPokemons
            let pokemonsByType = action.payload === 'All' ? searchByType
                : searchByType.filter(e => e.type.includes(action.payload))
            if (pokemonsByType.length === 0) {
                pokemonsByType.push("NotFound")
            }
            return {
                ...state,
                allPokemons: pokemonsByType
            }
        //  ********************************************           FILTRO POR CREACION    *******************************************************************************/        

        case 'SEARCH_BY_CREATION':
            let searchCreation = state.clonPokemons
            let respCreation = action.payload === 'pokeDb' ?
                searchCreation.filter(e => e.createdInDb) :
                searchCreation.filter(e => !e.createdInDb)
            return {
                ...state,
                allPokemons: respCreation
            }

        //  ********************************************           ORDENAMINETOS          ********************************************************************************/
        case 'GET_ORDERING':                                //                    ORDENAMINETO POR NOMBRE DE MAYOR A MENOR
            let orderby = action.payload
            let orderPokemons = state.clonPokemons
            if (orderby === 'desc') {
                orderPokemons.sort((a, b) => {
                    const nameA = a.name.toLocaleLowerCase()
                    const nameB = b.name.toLocaleLowerCase()
                    if (nameA > nameB) return 1;
                    if (nameA < nameB) return -1;
                    return 0;
                })
            } else if (orderby === 'asc') {                  //                    ORDENAMINETO POR NOMBRE DE MENOR A MAYOR 
                orderPokemons.sort((a, b) => {
                    const nameA = a.name.toLocaleLowerCase()
                    const nameB = b.name.toLocaleLowerCase()
                    if (nameA > nameB) return -1;
                    if (nameA < nameB) return 1;
                    return 0;
                })
            }
            else if (orderby === 'major') {                 //                    ORDENAMINETO POR ATTACK DE MAYOR A MENOR
                orderPokemons.sort((a, b) => {
                    if (a.attack > b.attack) return -1;
                    if (a.attack < b.attack) return 1;
                    return 0
                })
            } else if (orderby === 'lower') {                 //                    ORDENAMINETO POR ATTACK DE MENOR A MAYOR 
                orderPokemons.sort((a, b) => {
                    if (a.attack > b.attack) return 1;
                    if (a.attack < b.attack) return -1;
                    return 0
                })
            }
            return {
                ...state,
                allPokemons: orderPokemons
            }
        //  ********************************************           BUSQUEDA POR NOMBRE     ********************************************************************************/
        case 'SEARCH_BY_NAME':
            return ({
                ...state,
                allPokemons: action.payload
            })

        //  ********************************************           BUSQUEDA POR ID     ********************************************************************************/
        case 'SEARCH_BY_ID':
            return ({
                ...state,
                pokemonDetail: action.payload
            })
        //  ********************************************           CREACION DE POKEMON     ********************************************************************************/

        case 'CREATE_POKEMON':
            return {
                ...state,
            }

        //  ********************************************           ELIMINACION DE POKEMON     ********************************************************************************/

        case 'DELETE_POKEMON':
            return {
                ...state,
            }

        //  ********************************************           RESET DEL STATE DE LOADING     ********************************************************************************/
        case 'RESET_POKEMON_DETAIL':
            return {
                ...state,
                pokemonDetail: []
            }

        default:
            return state
    }
}

