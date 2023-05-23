import React from 'react';
import './App.css';
import {WeatherCard} from "./components/WeatherCard";
import {AppHeadings} from "./components/AppHeadings";


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <AppHeadings/>
                <WeatherCard/>
            </header>
        </div>
    );
}

export default App;
