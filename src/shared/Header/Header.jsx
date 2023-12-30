import React from 'react'
import './header.css'
import logo from '../../assets/pokemon_logo.png'
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className='div_header'>
      <div className='div_logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='search'>
        <input type="text" placeholder='buscar...' />
        <button className='btn_search'><FaSearch /></button>
      </div>
    </div>
  )
}

export default Header