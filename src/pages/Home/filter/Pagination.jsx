import React, { useState } from 'react'
import './pagination.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Pagination({ onSeleccion, nextPage, previousPage, nPage }) {
  const [page, setPage] = useState('');

  const pages = [
    { name: '20', value: 20 },
    { name: '30', value: 30 },
    { name: '40', value: 40 },
    { name: '50', value: 50 },
  ]

  const enviarDato = (event) =>{
    const dato = event.target.value;
    setPage(dato);
    onSeleccion(dato);
  }

  const nextPg = ()=>{
    nextPage();
  }

  const previousPg = ()=>{
    previousPage();
  }

  const [seleccion, setSeleccion] = new useState('');

  return (
    <div className='pagination'>
      <p>Pokemon por páginas</p>
      <select value={page} name="n-pages" id="pages" onChange={enviarDato}>
        {pages.map((pages) => {
          return <option key={pages.value} value={pages.value}>{pages.name}</option>
        })
        }
      </select>
      <button className='btnLeft' onClick={previousPg}><FaAngleLeft /></button>
      <p className='noPage'>{nPage}</p>
      <button className='btnRight' onClick={nextPg}><FaAngleRight /></button>
    </div>
  )
}

export default Pagination