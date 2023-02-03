import React from "react";
import FormattedDate from"./FormattedDate.js"
 export default function weatherInfo(props){
    return(
        <div className="row mainWeather">
      <div className="col wind">
        <h4>💨 Wind {props.data.wind} m/sec</h4>
      </div>
      <div className="col">
        <h2>{props.data.cityName}</h2>
        <h5><FormattedDate date = {props.data.date} /> </h5>
        <h2>
          
         <span>
         <img src = {props.data.weatherImg} alt = {props.data.weatherIcon} /> 
         </span> 
          <span>{props.data.temperature}</span>
          <span className="unit">
            <a href="/" className="active">
              °C{" "}
            </a>
            <a href="/">(°F)</a>
          </span>
          <span>{props.data.description}</span>
        </h2>
      </div>
      <div className="col humidity">
        <h4>💧 Humidity {props.data.humidity}%</h4>
      </div>
    </div>
    )

 }