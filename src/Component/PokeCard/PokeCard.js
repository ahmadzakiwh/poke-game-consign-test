import React from 'react';

function PokeCard({name, image, type}) {
  return (
      <div>
        <img src={image} alt={name}/>
        <div>
            <h3>{name}</h3> 
            <small>Type: {type}</small>
        </div>
      </div>
  )
}

export default PokeCard;
