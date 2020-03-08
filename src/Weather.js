import React from 'react';
import WeatherInfo from './WeatherInfo';

import './Weather.css';

function Weather() {
    return (
        <div className="Weather">
          <WeatherInfo defaultCity="Berlin"/>
        </div>
    )
}
export default Weather;