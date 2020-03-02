import React from 'react';
import './Weather.css';

function WeatherInfo() {
    return (
        <div>
            <form className="left">
                <h1 id="temp">°C</h1>
                <a id="temp-cel" href="" class="active">°C</a>{" "} |
                <a id="temp-fah" href="">°F</a>
                <br />
                <p id="get-date"></p>
                <span id="get-time"></span>
            </form>
            <form className="right">
                <h3>Detail:</h3>
                <hr />   
                <ul>
                <li>Humidity: <span id="humid"></span>%</li>
                <li>Wind: <span id="winds"></span>km/hr</li>
                <li>Visibility: <span id="visible"></span>km</li>
                </ul>
            </form>
        </div>
    )
}
export default WeatherInfo;