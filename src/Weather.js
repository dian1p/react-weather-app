import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';
import './Weather.css';

function Weather() {
    return (
        <div className="Weather">
          <Search /> 
          <WeatherInfo />
        </div>
    )
}
export default Weather;