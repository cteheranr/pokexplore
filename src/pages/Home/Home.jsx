import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import './home.css';
import Pagination from './filter/Pagination';

function Home() {
  const [dataPokemons, setdataPokemons] = useState([]);
  const [pages, setPages] = useState('20');
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [nPage, setnPage] = useState(1);

  useEffect(() => {
    getAllPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${pages}&offset=0`);
  }, []);

  const getAllPokemon = async (uri) => {
    const response = await fetch(uri).then(res => res.json()).then((data) => {
      setdataPokemons(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }).catch(error => console.error('Error:', error));
  }

  const getPokemonPerPage = (page) => {
    setPages(page);
    getAllPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=0`);
    setnPage(1);
  }

  const nextPage = () => {
    if (next) {
      getAllPokemon(next);
      let n = nPage + 1;
      setnPage(n);
    }
  }

  const previousPage = () => {
    if (previous) {
      getAllPokemon(previous);
      let n = nPage - 1;
      setnPage(n);
    }
  }

  return (
    <>
      <section className='main_header'>
        <Pagination onSeleccion={getPokemonPerPage} nextPage={nextPage} previousPage={previousPage} nPage={nPage} />
      </section>
      <div className='card-content'>
        {dataPokemons.map((card) => {
          return <Card card={card} key={card.name} />
        })}
      </div>
      <section className='main_header'>
        <Pagination onSeleccion={getPokemonPerPage} nextPage={nextPage} previousPage={previousPage} nPage={nPage} />
      </section>
      <footer className="attribution">
        Coded by <a href="https://cteheranr.github.io/" target="_blank">Camilo Teheran</a>.
      </footer>
    </>
  )
}

export default Home