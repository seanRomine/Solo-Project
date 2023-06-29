import React from 'react'

const Trailer = ({ trailer, onDelete, onToggle, onAdd }) => {
  return (
    <div>
        <label>
            <input
            type="checkbox"
            checked={trailer.checked}
            onChange={() => onToggle(trailer.id)}
            />
            <span>{trailer.name}</span>
            <span>{trailer.status}</span>
            <span>{trailer.location}</span>
            <span>{trailer.orderNumber}</span>
        </label>
        <button
        //onClick
        className="btn"
        onClick={() => onDelete(trailer.id) }
        >Delete
        </button>
    </div>
  )
}

export default Trailer