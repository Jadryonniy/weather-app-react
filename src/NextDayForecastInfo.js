import React from "react";
import FormatDateForecast from"./FormatDateForecast.js"


export default function NextDayForecastInfo (props){

    return(
        <div className="card">
          <div className="card-body">
            
            {/* <h5 className="card-title">
              <FormatDateForecast date = {props.date} /> </h5> */}
            <p className="card-text">
    
            {/* <span>
            <img src = {`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt = {props.weatherDescription} /> 
            </span>  */}
    
    
              <span>{}</span> <br />
              <span>{props.temperatureMax}</span>/<span>{props.temperatureMin}</span>
              °C
            </p>
            <p className="card-text">
              <span>Wind {props.wind} m/s</span> 
            </p>
          </div>
        </div>

    )
}