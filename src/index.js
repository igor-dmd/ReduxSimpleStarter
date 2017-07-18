import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA2UbDXh2uxyL2ygBkAjjFeE1lKz6udBNY';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));