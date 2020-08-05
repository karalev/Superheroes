import React from 'react';
import './Card.css';

function Card ({hero}) {
    const {id, image, name, powerstats, biography} = hero;
    return (
        <article className={`heroCard-container ${biography.alignment === 'good' ? 'heroCard-container--highlightGood' : 'heroCard-container--highlightBad'}`}>
            <p className="heroCard-id">{id}</p>
            <p className="heroCard-name">{name}</p>
            <img className="heroCard-image" src={image.url} alt={name}></img>
            <table className="heroCard-powerstatsList">
                <tbody>
                {Object.entries(powerstats).map(([key, value]) => {
                    const highlightClass = +value > 80 ? 'heroCard-fieldValue--highlightHigh' : 
                    value > 40 ? 'heroCard-fieldValue--highlightMedium' : 
                    'heroCard-fieldValue--highlightLow';
                    return (
                        <tr key={key}>
                            <td className="heroCard-fieldName">{key}:</td><td className={`heroCard-fieldValue ${highlightClass}`}>{value}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <ul className="heroCard-biography">
                {Object.entries(biography).map(([key, value]) => {
                    if(Array.isArray(value)){
                        return (
                            <li key={key} >
                                <span className="heroCard-fieldName">{key}</span>: 
                                <ul>
                                    {value.map((el, index) => <li key={el+index}>{el}</li>)}
                                </ul>
                            </li>
                        )
                    } else {
                        return (
                            <li key={key} >
                                <span className="heroCard-fieldName">{key}</span>: <span>{value}</span>
                            </li>
                        )
                    }
                })}
            </ul>
        </article>
    )
}

export {Card};