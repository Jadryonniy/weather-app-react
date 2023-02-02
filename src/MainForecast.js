import React,  { useState} from "react";
import "./App.css";
import axios from "axios";
import FormattedDate from"./FormattedDate.js"


export default function MainForecast(props) {
  let[ready, setReady] = useState(false);
  const[weatherData, setWeatherData] = useState({})
  
  function handleResponse(response){
    console.log(response)
    setReady(true);
  setWeatherData({
    
    cityName: response.data.city,
    wind: response.data.wind.speed,
    date:  new Date(response.data.time * 1000),
    humidity: response.data.temperature.humidity,
    temperature: Math.round(response.data.temperature.current),
    description: response.data.condition.description,
    weatherImg: response.data.condition.icon_url,
    weatherIcon: response.data.condition.icon
  });
  
}

if(ready){
  return (
    
    <div className="row mainWeather">
      <div className="col wind">
        <h4>💨 Wind {weatherData.wind} m/sec</h4>
      </div>
      <div className="col">
        <h2>{weatherData.cityName}</h2>
        <h5><FormattedDate date = {weatherData.date} /> </h5>
        <h2>
          
         {/* <span> <img> crs = {weatherData.weatherImg} alt={weatherData.weatherIcon} </img>  </span> */}
          <span>{weatherData.temperature}</span>
          <span className="unit">
            <a href="/" className="active">
              °C{" "}
            </a>
            <a href="/">(°F)</a>
          </span>
          <span>{weatherData.description}</span>
        </h2>
      </div>
      <div className="col humidity">
        <h4>💧 Humidity {weatherData.humidity}%</h4>
      </div>
    </div>
   
    
  );
 
}

  else{
    let city =props.defaultCity
    
    const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
    
  }
  }
