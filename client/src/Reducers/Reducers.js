const initialState = {
    typePoke: [],
    allPokemons: [],
    orderPokemons: [],
    searchByType: [],
    searchByCreation: [],
    searchByName: [],

}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        //  *********************************           BUSQUEDA DE TODOS LOS TIPOS DE POKEMONS     ***********************************************************************/
        case 'GET_TYPES_POKEMON':
            return {
                ...state,
                typePoke: action.payload
            }

        //  *********************************           BUSQUEDA DE TODOS LOS POKEMONS     ****************************************************************************/
        case 'GET_ALL_POKE':
            return {
                ...state,
                allPokemons: action.payload
            }
        //  ********************************************           FILTRO POR TYPO        ********************************************************************************/

        case 'SEARCH_BY_TYPE':
            let searchByType = state.allPokemons
            let pokemonsByType = searchByType.filter(e => e.type.includes(action.payload))
            return {
                ...state,
                allPokemons: pokemonsByType
                // searchByType: pokemonsByType
            }
        //  ********************************************           FILTRO POR CREACION    *******************************************************************************/        

        case 'SEARCH_BY_CREATION':
            // let creating = action.payload
            // console.log(creating)
            let searchCreation = state.allPokemons
            let respCreation = action.payload === 'pokeDb' ?
                searchCreation.filter(e => e.createdInDb) :
                searchCreation.filter(e => !e.createdInDb)
            return {
                ...state,
                allPokemons: respCreation
                // searchByCreation: respCreation
            }

        //  ********************************************           ORDENAMINETOS          ********************************************************************************/
        case 'GET_ORDERING':                                //                    ORDENAMINETO POR NOMBRE DE MAYOR A MENOR
            let orderby = action.payload
            let orderPokemons = state.allPokemons
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
            } else if (orderby === 'major') {                 //                    ORDENAMINETO POR ATTACK DE MAYOR A MENOR
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
                // orderPokemons: orderPokemons
            }
        //  ********************************************           BUSQUEDA POR NOMBRE     ********************************************************************************/
        case 'SEARCH_BY_NAME':
            return ({
                ...state,
                allPokemons: action.payload
                // searchByName: action.payload
            })

        default:
            return state
    }
}

