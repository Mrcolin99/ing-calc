import React from 'react';
import './Card.css';

function Card({ name, weight, cost, id, deleteCard }) {
    const handleDelete = () => {
        deleteCard(id);
    }

    return (
        <div className='card-main' key={id}>
            <h3 className='card-title'>{name}</h3>
            <p className='card-weight'>Weight: {weight}#</p>
            <p className='card-cost'>Cost: ${cost}</p>
            <br/>
            <button className='delete-button' onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Card;
