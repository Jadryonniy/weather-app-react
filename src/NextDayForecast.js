import React, {useState} from "react";
import axios from "axios"
import NextDayForecastInfo from "./NextDayForecastInfo.js"
import "./App.css";

export default function NextDayForecast(props) {
 
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
 
  function handleResponse(response){
    console.log(response);
    
  setLoaded(true);
       
  setForecastData(response.data.daily)

    
 console.log(response);
}
     
    if(loaded){
      
      return (
        <div className="row">
      <div className="col">
        
        <NextDayForecastInfo data = {forecastData[0]}/>;
      </div>
      <div className="col">
        
        <NextDayForecastInfo data = {forecastData[1]}/>;
      </div>
      <div className="col">
        
        <NextDayForecastInfo data = {forecastData[2]}/>;
      </div>
      <div className="col">
        
        <NextDayForecastInfo data = {forecastData[3]}/>;
      </div>
      <div className="col">
        
        <NextDayForecastInfo data = {forecastData[4]}/>;
      </div>

     
      </div>
    );
    

  }
  else{

  const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.data.long}&lat=${props.data.lat}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);



  }
}
