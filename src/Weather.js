import React from 'react';
import './Weather.css';
import Search from './Search';

function Weather() {
    return (
        <div className="weather">
          <Search />  
          <h2 id="show-city">Amsterdam</h2>
        </div>
    )
}
export default Weather;