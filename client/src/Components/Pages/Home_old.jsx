import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllPokemons, searchByType, typePokemons } from '../../Actions/Actions'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Paginate from './Paginate'

// import "../Css/Home.css";
// import Cards from './Cards'
// import Nav from './Nav'
// import { NavLink } from 'react-router-dom';
// import Footer from './Footer';
// import DetailPokemon from './DetailPokemon';

function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons)
    const type = useSelector((state) => state.typePoke);

    //! DECLARACION DE LOS ESTADOS
    const [currentPage, setCurrentPage] = useState(1)           //  Estado de paginado
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)  //  cantidad de pokemones por pagina
    const indexLastPage = currentPage * pokemonsPerPage    // multiplico la pag actual por la cantida de poke por paginas

    //! DECLARACION DE LOS CONSTANTES
    const indexOfFirtPokemon = indexLastPage - pokemonsPerPage;     // indice del ultimo poke - los poke por pagina
    const currentPoke = allPokemons.slice(indexOfFirtPokemon, indexLastPage)
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    // console.log(type);
    // console.log(allPokemons);
    useEffect(() => {
        console.log("entre a useEffect")
        dispatch(getAllPokemons())
        dispatch(typePokemons())
    }, [])
    
    const searchType = (e) => {
        // console.log(e)
        dispatch(searchByType(e))
    }

    function handleClick(e) {
        e.preventDefault()
        console.log("cargue de nuevo los pokemons")
        dispatch(getAllPokemons())
    }
    
    return (
        <div>
            <Paginate pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginate={paginate} />
            <div>
                <Link to='/home'>Home</Link>
                {/* {console.log(allPokemons)} */}
                <button className="btn" onClick={e => handleClick(e)}>
                    Cargar todos los Pokemon
                </button>
            </div>
            <div>
                <p>Filter by Type:</p>
                <select name='search' id='search' onChange={(e) => searchType(e.target.value)}>
                    {type ?
                        type.map((e, i) => {
                            return (
                                <option value={e} key={i}> {e} </option>
                            )
                        })
                        : null
                    }
                </select>
            </div>
            <div>
                {
                    currentPoke && currentPoke.map((e) => {
                        return (
                            <Cards
                            key={e.id}
                                name={e.name}
                                life={e.life}
                                attack={e.attack}
                                defense={e.defense}
                                speed={e.speed}
                                height={e.height}
                                weight={e.weight}
                                img={e.sprite}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;
