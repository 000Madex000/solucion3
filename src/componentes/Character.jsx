import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Character = () => {

    const [person, setPerson] = useState({});
    const [location, setLocation] = useState({})
    const combineId = Math.floor(Math.random() * 20) + 1
    const [placeId, setPlaceId] = useState('')

    const searchId = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${placeId}`)
            .then(res => setLocation(res.data))
        axios.get(`https://rickandmortyapi.com/api/character/${placeId}`)
            .then(res => setPerson(res.data))
    }
    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/character/${combineId}`)
            .then(res => setPerson(res.data))
    }, [])
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${combineId}`)
            .then(res => setLocation(res.data))
    }, [])



    console.log(Character)
    return (
        <div className='principale'>
            
            <h2><i class="fa-solid fa-meteor"></i> rick and morty <i class="fa-solid fa-meteor"></i></h2>
          <div className='box_origin'>
             
            <div className='container_character'>
               
                <div className='boxCharacter'>
                    <h1 className='title'>{person.name}</h1>
                    <div className='box_img'>
                        <img className='img' src={person.image} alt="" />
                    </div>
                    <div className='box_date'>
                        <p>status : {person.status}</p>
                        <p>specie : {person.species}</p>
                        <p>gender : {person.gender}</p>

                    </div>
                </div>

            </div>
            <div className='container_ubication' >
                <h2 className='ubication_title'><i class="fa-solid fa-earth-europe"></i>  
                {location.name}
                </h2>
                <div className='box_parrafos'>
                    <p className='letra'>Type : {location.type}</p>
                    <p className='letra'>Dimension : {location.dimension}</p>
                    <p className='letra'>Residents : {location.residents?.length} </p>

                </div>
                <div className='box_input'>
                    <label onClick={searchId}  ><i class="fa-solid fa-magnifying-glass"></i>search </label>
                    <input placeholder='ID' type="text" value={placeId} onChange={e => setPlaceId(e.target.value)} />
                </div>
            </div>


        </div>  
        </div>
        

    );
};

export default Character;