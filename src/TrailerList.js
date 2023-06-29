import React from 'react'
import Trailer from './Trailer';


const TrailerList = ({ trailers, onDelete, onToggle }) => {

  return (
    <div>
        <ul>
            {trailers.map((trailer) => (
              <Trailer key={trailer.id} trailer={trailer} onDelete={ onDelete } onToggle={ onToggle } />
            ))}
        
        </ul>
    </div>
  )
}

export default TrailerList