import React from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetails() {
  let  params = useParams();
  return (
    <div>PokemonDetails {params.name}</div>
  )
}

export default PokemonDetails