import React, { useState } from"react";

export default function WeatheTempConverter(props){
    const[unit, setUnit] = useState( "celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")

}
function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

if (unit === "celsius")
    return(
        <span className = "me-2">
        <span>{props.celsius}</span>
          <span className="unit">
            
              °C{" "}
            
            <a href="/" onClick={showFahrenheit}>(°F)</a>
          </span>
          </span>

    )
    else{
        return(
            <span className = "me-2">
        <span>{Math.round(props.celsius * 9/5 +32)}</span>
          <span className="unit">
            <a href="/"  onClick={showCelsius}>
              °C{" "}
            </a>
            <span>(°F) </span>
            
          </span>
          </span>

        )
    }
}