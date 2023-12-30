import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Header from '../shared/Header/Header'
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails';

function LayoutHome() {

  return (
    <div className='layout'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" Component={PokemonDetails} />  
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  )
}

export default LayoutHome;