import React, {useState} from "react";
import axios from "axios"
import NextDayForecastInfo from "./NextDayForecastInfo.js"
import "./App.css";

export default function NextDayForecast(props) {
  
  let [loaded, setLoaded] = useState(false);
  const[forecastData, setForecastData] = useState(null);
 
  function handleResponse(response){
   
setForecastData(response.data.list)

   setForecastData({
   wind: response.data.list[0].wind.speed,
  //  date:  new Date(response.data.list[0].dt * 1000),
  
   temperatureMax: Math.round(response.data.list[0].temp_max),
   temperatureMin: Math.round(response.data.list[0].temp_min),
   
   weatherDescription: response.data.list[0].weather.main,
   weatherIcon: response.data.list[0].weather.icon,
  
   
 });
   setLoaded(true);
    

}
     
    if(loaded){
      
      return (
      <div className="col">
       <NextDayForecastInfo data = {forecastData} />
      </div>
    );
    

  }
  else{

  const apiKey = "30e7329b2cf5d973330cfcc405308ca0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);



  }
}
