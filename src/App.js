import React from 'react';
import 'App.css';
import Header from './Header';
import TrailerList from './TrailerList';
import AddTrailer from './AddTrailer';
import Footer from './Footer';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [trailers, setTrailers] = useState([
        {
            id: 1,
            name: 'SWFT123456',
            status: 'Empty',
            location: 'Staging',
            orderNumber: '5678',
            checked: false
        },
        {
            id: 2,
            name: 'RYDR567567',
            status: 'Loaded Inbound',
            location: 'Inbound Yard',
            orderNumber: '123123',
            checked: true
        },
        {
            id: 3,
            name: 'HGIU456456',
            status: 'Loaded Outbound',
            location: 'Dock Door 5',
            orderNumber: '987987',
            checked: false
        }
    ])

    const addTrailer = (trailer) => {
      const id = Math.floor(Math.random() * 100000) + 1;
      const newTrailer = { id, ...trailer }
      setTrailers([...trailers, newTrailer]);
    }

    const deleteTrailer = (id) => {
      setTrailers(trailers.filter((trailer) => trailer.id !== id))
    }

    const toggleCheck = (id) => {
      setTrailers(trailers.map((trailer) => trailer.id === id ? 
      {...trailer, checked: !trailer.checked} : trailer))
    }

    return(
        <div>
            <h1>Trailer Inventory</h1>
            <Header/>
            <AddTrailer onAdd={addTrailer}/>
            {trailers.length > 0 ? (
            <TrailerList trailers={trailers} onDelete={ deleteTrailer } onToggle={ toggleCheck }/>
            ) : (
                'The yard is empty'
            )}
            <Footer />
        </div>
    )
};

export default App;