import React from 'react'
import './Cards.css'

const Cards = ({ image, name, description }) => {
    return (
        <div className="doctor-card">
            <img src={image} alt={name} className="doctor-image" />
            <h2 className="doctor-name">{name}</h2>
            <p className="doctor-description">{description}</p>
        </div>
    );
};

export default Cards