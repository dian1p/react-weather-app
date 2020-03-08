import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import FormattedDate from './FormattedDate';
import './Weather.css';

function WeatherInfo(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response){
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            visibility: response.data.visibility,
            city: response.data.name,
            description: response.data.weather[0].description,
        });
    }

    if (weatherData.ready) {
        return (
            <div className="frame">
               <form id="signup-form">
                   <input
                    className="col-4"
                    type="text"
                    placeholder="search city"
                    id="city-input"
                    autoFocus="on"
                   />
                   <button type="submit" className="button">
                   <FontAwesomeIcon icon={faSearch} />
                   </button>
                   <button type="submit" className="button">
                   <FontAwesomeIcon icon={faMapMarkerAlt} />
                   </button>
                   <h2 id="show-city">{weatherData.city}</h2>
                   <img className="image1" src={weatherData.iconUrl} id="icon" alt="weather logo" /> 
                   <h6 className="text-capitalize font-italic">{weatherData.description}</h6>
               </form>
                

           
                <div>
                    <form className="left">
                        <h1>{Math.round(weatherData.temperature)}°C</h1>
                        <a id="temp-cel" href="" className="active">{Math.round(weatherData.temperature)}°C</a>{" "} |
                        <a id="temp-fah" href="">°F</a>
                        <br />
                        <FormattedDate date={weatherData.date} />
                    </form>
                    <form className="right">
                        <h3>Details</h3>
                        <hr />   
                        <ul>
                        <li>Humidity {weatherData.humidity}<span className="font-italic"id="humid">%</span></li>
                        <li className="wind">Wind {weatherData.wind}<span className="font-italic"id="winds">km/hr</span></li>
                        <li>Visibility {weatherData.visibility}<span className="font-italic"id="visible">km</span></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    } else {
        const apiKey = "ee9060a17d3b031011ce7cd1a42cfa7b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
    
        
  
}

export default WeatherInfo;