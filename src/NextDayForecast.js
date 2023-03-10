import React, {useState, useEffect} from "react";
import axios from "axios"
import NextDayForecastInfo from "./NextDayForecastInfo.js"
import "./App.css";

export default function NextDayForecast(props) {
 
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.cityName]);
 
  function handleResponse(response){
    console.log(response);
    
  setLoaded(true);
       
  setForecastData(response.data.daily)

    
 console.log(response);
}
     
    if(loaded){
      
      return (
        <div className="row">
          {forecastData.map(function(dailyForecast, index){

            if(index>0 && index<6){
            return(
              <div className="col" key = {index}>
        
              <NextDayForecastInfo data = {dailyForecast}/>
            </div>
            );}
            else {
              return null}

          })}
     
      </div>
    );
    

  }
  else{

  const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.data.long}&lat=${props.data.lat}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);



  }
}
