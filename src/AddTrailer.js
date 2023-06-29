import React from 'react'
import { useState } from 'react'

const AddTrailer = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState('')
  const [orderNum, setOrderNum] = useState('')
  const [checked, setChecked] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
        alert('Please add trailer info')
        return;
    }

    onAdd( { name, status, location, orderNum, checked } )

    setName('')
    setStatus('')
    setLocation('')
    setOrderNum('')
    setChecked('')
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Trailer</label>
            <input type="text" placeholder='SCAC + Trailer Number'
            value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label>Status</label>
            <input type="text" placeholder='Empty or Loaded'
            value={status} onChange={(e) => setStatus(e.target.value)}/>
        </div>
        <div>
            <label>Location</label>
            <input type="text" placeholder='Yard Location'
            value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div>
            <label>Order Number</label>
            <input type="text" placeholder='Order #'
            value={orderNum} onChange={(e) => setOrderNum(e.target.value)}/>
        </div>
        <div>
            <label>Priority</label>
            <input type="checkbox" placeholder='unchecked'
            value={checked} onChange={(e) => setChecked(e.target.value)}/>
        </div>
        <input type='submit' value='Add Trailer' />
    </form>
  )
}

export default AddTrailer