import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { typePokemons, getAllPokemons, getOrdering, searchByType, searchByCreation, searchByName, resetPokemonDetail } from '../../Actions/Actions'
import '../Css/Home.css';
import Paginate from './Paginate'
import Cards from './Cards';
import Loading from '../Loading/Gastly.gif'
import NotFound from './NotFound'



function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons)
    const type = useSelector((state) => state.typePoke);


    //!---------------------------------------       DECLARACION DE LOS ESTADOS      ----------------------------------------
    const [name, setName] = useState('')
    const [currentPage, setCurrentPage] = useState(1)               //  Estado de paginado
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)      //  cantidad de pokemones por pagina
    const indexLastPage = currentPage * pokemonsPerPage             //  Index del ultimo pokemon, multiplico la pag actual por la cantida de poke por paginas
    const [refresh, setRefresh] = useState(false)                   //  Estado para refrescar la pagina


    //!------------------------------------------    DECLARACION DE LOS CONSTANTES  ------------------------------------------
    const indexOfFirtPokemon = indexLastPage - pokemonsPerPage;     // indice del ultimo poke - los poke por pagina
    const currentPoke = allPokemons.slice(indexOfFirtPokemon, indexLastPage)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //!------------------------------------------    DECLARACION DE HOOKS   ------------------------------------------
    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(typePokemons())
        dispatch(resetPokemonDetail([]))
    }, [dispatch])

    //!------------------------------------------    DECLARACION DE LAS FUNCIONES   ------------------------------------------
    function handleClick(e) {
        e.preventDefault()
        dispatch(getAllPokemons())
    }

    const ordering = (e) => {
        setRefresh(!refresh)
        dispatch(getOrdering(e))
    }

    const searchType = (e) => {
        dispatch(searchByType(e))
    }

    const searcrCreation = (e) => {
        dispatch(searchByCreation(e))
    }

    const handleInputName = (e) => {
        setName(e)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            alert('Ingrese un nombre')
        }
        dispatch(searchByName(name))
        setName('')
    }

    //------------------------------------------    COMPONENTE A RENDERIZAR     ------------------------------------------
    return (
        <div className='cmp-container-home'>
            {/* //! ***********************  SECCION DE FILTROS     ***********************************************************/}
            <div className='filters'>
                <input type='button'
                    value="Alls Pokemons"
                    onClick={handleClick}
                    className="btn-all-poke"
                />

                {/******************************** FILTRO POR TIPO **********************************/}
                <p>Filter by Type:</p>
                <select
                    name='search'
                    id='search'
                    onChange={(e) => searchType(e.target.value)}
                >
                    {type ?
                        type.map((e, i) => {
                            return (
                                <option value={e} key={i}> {e} </option>
                            )
                        })
                        : null
                    }
                </select>

                {/*************************        FILTRO POR CREACION  **********************************/}
                <p>Filter by:</p>
                <select
                    name='creation'
                    id='creation'
                    onChange={(e) => searcrCreation(e.target.value)}
                >
                    <option value='pokeApi'>Existing</option>
                    <option value='pokeDb'>Created</option>
                </select>

                {/*************************        ORDENAMIENTO         **********************************/}
                <p>Order by:</p>
                <select
                    name='ordering'
                    id='ordering'
                    onChange={(e) => ordering(e.target.value)}
                >
                    <option value='desc'>A - Z</option>
                    <option value='asc'>Z - A</option>
                    <option value='major'>Major attack</option>
                    <option value='lower'>Lower attack</option>
                </select>

                {/************************          SEARCH              **********************************/}
                <div className="form__group field">
                    <input
                        required=""
                        placeholder="Search"
                        className="form__field"
                        value={name}
                        type="input"
                        onChange={(e) => handleInputName(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <label
                        className="form__label"
                        htmlFor="name">Name Pokemon
                    </label>
                </div>
                <input
                    type='button'
                    value="Search"
                    name='submit'
                    id='submit'
                    onClick={handleSubmit}
                    className='btn-all-poke'
                />
            </div>

            {/* //! ***********************  COMPONENTE DE PAGINADO     ********************************************************** */}
            <Paginate
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginate={paginate} />

            {/* //! ***********************  SECCION DE CARDS           ***********************************************************/}
            <div className='cartas'>
                {allPokemons.length === 0 ? <img src={Loading} alt="" className="loading" />    // Si el length es 0 Cargo la imagen de pokemon Not Found
                    :
                    (allPokemons[0] === "NotFound" ?
                        <NotFound />
                        :
                        currentPoke.map((e, id) => {
                            return (
                                <Cards
                                    key={id}
                                    id={e.id}
                                    name={e.name}
                                    type={e.type}
                                    img={e.sprite}
                                    createdInDb={e.createdInDb ? true : null}
                                />
                            )
                        })
                    )}
            </div>
        </div>
    );
}

export default Home;