import React from 'react';
import FormattedDate from './FormattedDate';

import './Weather.css';

function WeatherInfo(props) {
    return ( 
      <div className="WeatherInfo">
        <form className="left">
            <h1>{Math.round(props.data.temperature)}°C</h1>
            <a id="temp-cel" href="" className="active">{Math.round(props.data.temperature)}°C</a>{" "} |
            <a id="temp-fah" href="">°F</a>
            <br />
            <FormattedDate date={props.data.date} />
        </form>
        <form className="right">
            <h3>Details</h3>
            <hr />   
            <ul>
            <li>Humidity {props.data.humidity}<span className="font-italic"id="humid">%</span></li>
            <li className="wind">Wind {props.data.wind}<span className="font-italic"id="winds">km/hr</span></li>
            <li>Visibility {props.data.visibility}<span className="font-italic"id="visible">km</span></li>
            </ul>
        </form>
      </div>
    );
}
export default WeatherInfo;