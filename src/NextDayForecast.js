import React, {useState} from "react";
import axios from "axios"
// import NextDayForecastInfo from "./NextDayForecastInfo.js"
import FormatDateForecast from"./FormatDateForecast.js"
import "./App.css";

export default function NextDayForecast(props) {
 
  let [loaded, setLoaded] = useState(false);
  const[forecastData, setForecastData] = useState(null);
 
  function handleResponse(response){
    console.log(response);
    
  setLoaded(true);
       
  

   setForecastData({
    
   wind: response.data.list[0].wind.speed,
   date:  response.data.list[0].dt * 1000,
  
   temperatureMax: Math.round(response.data.list[0].main.temp_max),
   temperatureMin: Math.round(response.data.list[0].main.temp_min),
   
   weatherDescription: response.data.list[0].weather[0].main,
   weatherIcon: response.data.list[0].weather[0].icon,
  
   
 });
    
 console.log(response);
}
     
    if(loaded){
      
      return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            
            <h5 className="card-title">
              <FormatDateForecast date = {forecastData.date} /> </h5>
            <p className="card-text">
    
            <span>
            <img src = {`http://openweathermap.org/img/wn/${forecastData.weatherIcon}@2x.png`} alt = {forecastData.weatherDescription} /> 
            </span> 
    
    
              <span>{}</span> <br />
              <span>{forecastData.temperatureMax}</span>/<span>{forecastData.temperatureMin}</span>
              °C
            </p>
            <p className="card-text">
              <span>Wind {forecastData.wind} m/s</span> 
            </p>
          </div>
        </div>
      </div>
    );
    

  }
  else{

  const apiKey = "30e7329b2cf5d973330cfcc405308ca0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.data.lat}&lon=${props.data.long}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);



  }
}
