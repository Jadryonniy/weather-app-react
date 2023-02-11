import React from "react";
import FormatDateForecast from"./FormatDateForecast.js"


export default function NextDayForecastInfo (props){
    

    return(
      <div className="card">
      <div className="card-body">
        
        <h5 className="card-title">
          <FormatDateForecast date = {props.data.time * 1000} /> </h5>
        <p className="card-text">

        <span>
        <img src = {props.data.condition.icon_url} alt = {props.data.condition.description}/> 
        </span> 


          <span>{}</span> <br />
          <span>{Math.round(props.data.temperature.maximum)}</span>/<span>{Math.round(props.data.temperature.minimum)}</span>
          °C
        </p>
        <p className="card-text">
          <span>Wind {props.data.wind.speed} m/s</span> 
        </p>
      </div>
      </div>
      

    )
}