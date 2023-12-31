import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Header from '../shared/Header/Header'
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails';

function LayoutHome() {

  return (
    <div className='layout'>
      <Header />
      <Routes>
        <Route path="/pokexplore" element={<Home />} />
        <Route path="pokexplore/pokemon/:idPokemon" Component={PokemonDetails} /> 
      </Routes>
    </div>
  )
}

export default LayoutHome;