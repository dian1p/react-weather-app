import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

import './Weather.css';

function WeatherInfo(props) {
    return ( 
      <div className="WeatherInfo">
        <div>
          <WeatherIcon code={props.data.icon} />
          <p className="text-capitalize font-italic">{props.data.description}</p>
        </div>
          <div className="left">
              <WeatherTemperature celcius={props.data.temperature} />
              <br/>
              <FormattedDate date={props.data.date} />
          </div>
          <div className="right">
              <h3>Details</h3>
              <hr />   
              <ul>
              <li>Humidity: {props.data.humidity}<span className="font-italic">%</span></li>
              <li className="wind">Wind/hr: {props.data.wind}<span className="font-italic">km/hr</span></li>
              <li>Visibility: {props.data.visibility}<span className="font-italic">km</span></li>
              </ul>
          </div>
      
      </div>
    );
}
export default WeatherInfo;