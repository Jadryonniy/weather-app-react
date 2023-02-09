import React, {useState} from "react";
import axios from "axios"
import FormatDateForecast from"./FormatDateForecast.js"
import "./App.css";

export default function NextDayForecast(props) {
  console.log(props.data.cityName)
  let [loaded, setLoaded] = useState(false);
  const[forecastData, setForecastData] = useState(null);
 
  function handleResponse(response){
   console.log(response.data.daily)
   setLoaded(true);
    
  setForecastData({
  wind: response.data.daily[0].wind.speed,
  date:  new Date(response.data.daily[0].time * 1000),
 
  temperatureMax: Math.round(response.data.daily[0].temperature.maximum),
  temperatureMin: Math.round(response.data.daily[0].temperature.minimum),
  
  weatherImg: response.data.daily[0].condition.icon_url,
  weatherIcon: response.data.daily[0].condition.icon
  
});

}
     
    if(loaded){
      return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            
            <h5 className="card-title"><FormatDateForecast date = {forecastData.date} /> </h5>
            <p className="card-text">
    
            <span>
            <img src = {forecastData.weatherImg} alt = {forecastData.weatherIcon} /> 
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

  const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.cityName}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);



  }
}
