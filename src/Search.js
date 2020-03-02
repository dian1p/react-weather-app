import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Weather.css';
import WeatherInfo from './WeatherInfo';

function Search() {
    return (
       <div className="frame">
           <form id="signup-form">
               <input
                class="col-4"
                type="text"
                placeholder="search city"
                id="city-input"
                autocomplete="off"
               />
               <button type="submit">
               <FontAwesomeIcon icon={faSearch} />
               </button>
               <button type="submit">
               <FontAwesomeIcon icon={faMapMarkerAlt} />
               </button>
               <h2 id="show-city">Amsterdam</h2>
           </form>
           <img className="image1" src="" id="icon" alt="weather logo" />
           <WeatherInfo />
       </div>
    
    )
}
export default Search;