import React from 'react';
import './App.css';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { CardList } from './Components/CardList/CardList';

function App() {
    return (
        <main className="main-container">
            <SearchForm></SearchForm>
            <CardList></CardList>
        </main>
    );
}

export default App;
