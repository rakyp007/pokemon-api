import React from 'react'
import "..//App.css"
function PokemonThumnail({id, name, image, type}) {

  const style = `thumb-container ${type}`
  return (
    <div>
      <div className={style}>
        <div className='number'>
            <small>#{id}</small>
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
