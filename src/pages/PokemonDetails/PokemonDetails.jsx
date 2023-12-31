import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GET_ALL_POKEMON, GET_SPECIES_BY_ID } from '../../environments/environment';
import { FaArrowLeft } from "react-icons/fa";
import './pokemonDetails.css';
import pokeball from '../../assets/pokeball.png';
import { LiaWeightHangingSolid } from "react-icons/lia";
import { LiaRulerVerticalSolid } from "react-icons/lia";

function PokemonDetails() {
    const [dataPokemon, setDataPokemon] = useState({});
    const [typeInfo, setTypeInfo] = useState([]);
    const [color, setColor] = useState('');
    const [habilidades, setHabilidades] = useState([]);
    let params = useParams();

    useEffect(() => {
        getPokemonByName();
    }, []);

    const getPokemonByName = async () => {
        const response = await fetch(`${GET_ALL_POKEMON}/${params.idPokemon}`).then(res => res.json()).then((data) => {
            setDataPokemon(data);
            console.log(data)
            setTypeInfo(data.types)
            setColor(data.types[0].type.name);
            setHabilidades(data.abilities)
        }).catch(error => console.error('Error:', error));
    }

    return (
        <>
            <div className={`container-details color-${color}`}>
                <div className='main-pokemon-detail'>
                    <div className='title-pokemon'>
                        <Link to="/">
                            <button className={`arrow-left color-${color}`}><FaArrowLeft /></button>
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
                <div className='card-info'>
                    <img
                        src={dataPokemon?.sprites?.other["official-artwork"]?.front_default}
                        alt="foto pokemon"
                    />
                    <div className="type inter">
                        {typeInfo.map((typeInfo, index) => (
                            <p className={`color-${typeInfo.type.name}`} key={index}>{typeInfo.type.name}</p>
                        ))}
                    </div>
                    <h2 className={`font-${color}`}>Acerca de</h2>
                    <div className='attributes'>
                        <div className='container-attribute'>
                            <div className='attribute'>
                                <LiaWeightHangingSolid />
                                <p>{`${dataPokemon.weight} kg`}</p>
                            </div>
                            <p className='title-atribute'>Peso</p>
                        </div>
                        <hr />
                        <div className='container-attribute'>
                            <div className='attribute'>
                                <LiaRulerVerticalSolid />
                                <p>{`${dataPokemon.height} m`}</p>
                            </div>
                            <p className='title-atribute'>Estatura</p>
                        </div>
                        <hr />
                        <div className='container-attribute'>
                            <div className='attribute-hb'>
                                {habilidades.map((hab, index) => (
                                    <p key={index}>{hab.ability.name}</p>
                                ))}
                            </div>
                            <p className='title-atribute'>Habilidades</p>
                        </div>
                    </div>
                    <div className='content-stats'>
                        <h2 className={`title font-${color}`}>Estadísticas</h2>
                        <div className='stats'>
                            {dataPokemon?.stats?.map((stat, index) => {
                                return <div key={index} className='div-stats'>
                                    <span className='name-stat'>{stat.stat.name}</span>
                                    <span className='base-stat'>{stat.base_stat}</span>
                                    <div className='progress-stat'>
                                        <progress value={stat.base_stat} max={110}></progress>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonDetails