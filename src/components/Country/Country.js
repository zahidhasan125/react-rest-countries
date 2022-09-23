import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, population, area, continents} = props.data;

    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="flags" />
            <p>Continent: {continents[0]}</p>
            <p>Population: {population}</p>
            <p>Area: {area} sqr/km</p>
        </div>
    );
};

export default Country;