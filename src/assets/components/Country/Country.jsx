import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,region} =props.country
    return (
        <div className='country-single'>
        
            <h3>name:{name.common}</h3>
            <small>{region}</small>
            <p>{capital}</p>
        </div>
    );
};

export default Country;