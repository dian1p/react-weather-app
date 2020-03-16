import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import WeatherInfo from './Weatherinfo';

import axios from 'axios';
import './Weather.css';

function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] =useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            visibility: response.data.visibility,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            icon: response.data.weather[0].icon,
            
        });
    }

    function search() {
        const apiKey = "ee9060a17d3b031011ce7cd1a42cfa7b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
               <form onSubmit={handleSubmit}>
                   <input
                    className="col-4"
                    type="search"
                    placeholder="Search City..."
                    autoFocus="on"
                    onChange={handleCityChange}
                   />
                    <button type="submit" className="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button type="submit" className="button">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </button>
                   <h2>{weatherData.city}</h2>
               </form>
                <WeatherInfo data={weatherData} />
               
            </div>
        );
    } else {
       search();
        return "Loading..."
    }
    
        
  
}

export default Weather;