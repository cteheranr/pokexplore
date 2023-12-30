import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GET_ALL_POKEMON, GET_SPECIES_BY_ID } from '../../environments/environment';
import { FaArrowLeft } from "react-icons/fa";
import './pokemonDetails.css'
import pokeball from '../../assets/pokeball.png'

function PokemonDetails() {
    const [dataPokemon, setDataPokemon] = useState({});
    const [typeInfo, setTypeInfo] = useState([]);
    let params = useParams();

    useEffect(() => {
        getPokemonByName();
    }, []);

    const getPokemonByName = async () => {
        const response = await fetch(`${GET_ALL_POKEMON}/${params.idPokemon}`).then(res => res.json()).then((data) => {
            setDataPokemon(data);
            setTypeInfo(data.types[0].type.name)
        }).catch(error => console.error('Error:', error));
    }

    return (
        <>
            <div className={`container-details color-${typeInfo}`}>
                <div className='main-pokemon-detail'>
                    <div className='title-pokemon'>
                        <Link to="/">
                            <button className={`arrow-left color-${typeInfo}`}><FaArrowLeft /></button>
                        </Link>
                        <h2>{dataPokemon.name}</h2>
                    </div>
                    <div className='number-id'>
                        <h2>{`# ${dataPokemon.id}`}</h2>
                    </div>
                </div>
                <div className='container-info'>
                    <img src={pokeball} alt="pokeball" />
                </div>
            </div>
        </>
    )
}

export default PokemonDetails