import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCards } from './Redux/actions';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { CardList } from './Components/CardList/CardList';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchCards());
    }, [dispatch]);

    let isLoading = useSelector(state => state.app.loading);

    return (
        <main className="main-container">
            <SearchForm></SearchForm>
            {isLoading ? 
                <div className="main-loader"></div> : 
                <CardList></CardList>}
        </main>
    );
}

export default App;
