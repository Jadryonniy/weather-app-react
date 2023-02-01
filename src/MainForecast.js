import React,  { useState} from "react";
import "./App.css";
import axios from "axios";


export default function MainForecast(props) {
  let[ready, setReady] = useState(false);
  const[weatherData, setWeatherData] = useState({})
  
  function handleResponse(response){
    setReady(true);
  setWeatherData({
    
    cityName: response.data.name,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    weatherImg: response.data.weather[0].icon
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
        <h5>{weatherData.date}</h5>
        <h2>
          <span>{weatherData.weatherImg}</span>
          <span>{weatherData.temperature}</span>
          <span className="unit">
            <a href="/" class="active">
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
    let city = "Poltava"
    const apiKey = "30e7329b2cf5d973330cfcc405308ca0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
    
  }
  }
