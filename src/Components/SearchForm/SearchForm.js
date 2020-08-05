import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCards, sortCards } from '../../Redux/actions';
import './SearchForm.css';

function SearchForm () {
    let [searchName, setSearchName] = useState('');
    let [sortOption, setSortOption] = useState('Intelligence');
    let herostats = [
        'Intelligence',
        'Strength',
        'Speed',
        'Durability',
        'Power',
        'Combat'
    ];

    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
    }

    useEffect(()=> {
        dispatch(filterCards(searchName));
    }, [dispatch, searchName])

    const selectHandler = (event) => {
        setSortOption(event.target.value)
    }

    useEffect(()=> {
        dispatch(sortCards(sortOption))
    }, [dispatch, sortOption])

    return (
        <div className="searchForm-container">
            <form onSubmit={submitHandler}>
                <label htmlFor="heroName">Hero's Name:</label>
                <input type="search" 
                id="heroName" 
                className="searchForm-heroName"
                value={searchName}
                onChange={(event) => {setSearchName(event.target.value)}}>
                </input>
            </form>
            
            <select onChange={selectHandler} className="searchForm-statName">
                {herostats.map(stat => <option key={stat}>{stat}</option>)}
            </select>
        </div>
    )
}

export {SearchForm};