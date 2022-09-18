import React from 'react'

function PokemonThumnail({id, name, image, type}) {
  return (
    <div>
      <div className='thumb-container'>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className='detail-wrapper'>
            <h3>{name}</h3>
            <smail>Type: {type}</smail>
        </div>
      </div>
    </div>
  )
}

export default PokemonThumnail
