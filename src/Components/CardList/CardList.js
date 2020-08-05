import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../Card/Card';
import './CardList.css';

function CardList () {
    const herolist = useSelector(state => state.cards.cards);
    const [filteredList, setFilteredList] = useState(herolist);
    
    let filter = useSelector(state => state.cards.filter).toLowerCase();
    let sortOption = useSelector(state => state.cards.sortOption).toLowerCase();

    useEffect(()=> {
        setFilteredList(herolist
            .filter((element) => element.name.toLowerCase().indexOf(filter) !== -1)
            .sort((first, second) => {
                const firstValue = first.powerstats[sortOption] === 'null' ? 0 : first.powerstats[sortOption];
                const secondValue = second.powerstats[sortOption] === 'null' ? 0 : second.powerstats[sortOption];
                return secondValue - firstValue;
            })
        );
    }, [herolist, filter, sortOption])

    return (
        filteredList.length ? 
            <ul className="cardList-list">
                {filteredList.map(item => <li key={item.id} className="cardList-item"><Card hero={item}></Card></li>)}
            </ul> : 
        <p className="cardList-emptyListMessage">No Items Found!</p>
    )
}

export {CardList};