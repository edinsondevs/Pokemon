import  React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { typePokemons, allPokemons } from '../../Actions/Actions'
import '../Css/Home.css';
import Cards from './Cards';


function Home() {
//  DECLARO LOS ESTADOS

  // const [type, setType] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [orden, setorden] = useState('');
  const typesPokemon = useSelector((state) => state.typePoke);
  // console.log(state)

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(typePokemons());
    dispatch(allPokemons())
  }, [dispatch]);



  return (
    <div className='cmp-container-home'>
      <div className='filters'>
        {/* <div className='filters-select'>
                </div> */}
        {/* <div className='filters-search'> */}
        {/* </div> */}
                <p>Filter by Type:</p>
        <select name='' id=''>
          {/* {typesPokemon ?
            typesPokemon.map((e, i) => {
              return(
              <option value={e} key={i}> {e} </option>         
            )})
          : null
          } */}
        </select>
                <p>Filter by:</p>
        <select name='' id=''>
          <option value=''>Existing</option>
          <option value=''>Created</option>
        </select>
                <p>Order by:</p>
        <select name='' id=''>
          <option value=''>A - Z</option>
          <option value=''>Z - A</option>
          <option value=''>Major attack</option>
          <option value=''>Lower attack</option>
        </select>
        <p>Search </p>
        <input type='search' name='search' id='search-poke' placeholder='Search' />
      </div>
      <div className="cmp-cards">
      <section>
        <Cards />
      </section>
      </div>
    </div>
  );
}

export default Home;