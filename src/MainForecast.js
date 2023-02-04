import React,  { useState} from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js"


  
  export default function MainForecast(props) {
  const [city, setCity] = useState(props.defaultCity);
  const[weatherData, setWeatherData] = useState({ready: false});
  

  function handleResponse(response){
    
      setWeatherData({
    ready:true,    
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

function searchCity(event) {
  event.preventDefault();
  search();
  
  
}

function showCity(event) {
  setCity(event.target.value);
}

function search(){
  const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}


if(weatherData.ready){
  return (
    <div>
    <form className="input-group" onSubmit={searchCity}>
    <span className="input-group-text">Today in</span>
    <input
      type="search"
      className="form-control"
      placeholder="Search the location"
      autoComplete="off"
      onChange={showCity}
      autoFocus = "on"
      
    />

    <input type="submit" className="btn btn-outline-primary" value="OK"  />
    <input
      type="submit"
      className="btn btn-outline-secondary"
      value="Your location"
      
    />
  
  </form>
 
 <WeatherInfo data={weatherData} />
  
    
    
    </div>
   
    
  );
 
}

  else{
    search();   
   
    return "Loading ...";
    
  }
}
  
