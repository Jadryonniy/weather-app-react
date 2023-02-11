import React from "react";
import FormattedDate from"./FormattedDate.js"
import WeatherTempConverter from "./WeatherTempConverter.js"
 export default function weatherInfo(props){
    return(
        <div>
        <div className="row mainWeather mb-0">
      <div className="col wind">
        <h4>💨 Wind {props.data.wind} m/sec</h4>
      </div>
      <div className="col">
        <h2>{props.data.cityName}</h2>
        <h5><FormattedDate date = {props.data.date} /> </h5>
        
      </div>
      <div className="col humidity">
        <h4>💧 Humidity {props.data.humidity}%</h4>
      </div>
    </div>
    <div className="row mainWeather mt-0">
    <h2>
          
          <span>
          <img src = {props.data.weatherImg} alt = {props.data.weatherIcon} /> 
          </span> 
          <span> <WeatherTempConverter celsius = {props.data.temperature} /> </span>
          <span className ="d-none d-md-block d-lg-block">{props.data.description}</span>
           
           
         </h2>
         
         </div>
         </div>
    )

 }