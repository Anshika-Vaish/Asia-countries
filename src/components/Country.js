import React from 'react'
import './Country.css'

function Country({name,flag,population,region,capital,subregion,area,languages,borders}) {
    return (
        <div className='country'>
            <div className='image'>
                <img src={flag} alt="flage"/>
            </div>
            <div className='country-details head'>
                <h2>{name}</h2>
                <p>Capital : {capital}</p>
                <p>Region : {region}</p>
                <p>Subregion : {subregion}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
                <p>Borders : {borders.map(h => <div>{h}</div>)}</p>
                <p>Languages : {languages.map(home => <div>{home.name}</div>)}</p>

            </div>
        </div>
    )
}

export default Country;
