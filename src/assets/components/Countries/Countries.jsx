import React, { useEffect, useState } from 'react';
import Country from '../country/country';
import './Countries.css'


const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        console.log(countries);
    },[])
    return (
        <div>
            <h1>My Countries</h1>
            <div className="countries-container">
            
            {
                countries.map(country=><Country

                     country={country}
                     key={country.ccn3}

                  ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;