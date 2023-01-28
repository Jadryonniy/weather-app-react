import React from "react";
import "./App.css";

export default function MainForecast() {
  let WeatherData = {
    cityName: "Lviv",
    wind: 9.2,
    date: "8.10 Saturday",
    humidity: 75,
    temperature: +12,
    description: "Sunny",
    weatherImg: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
  };
  return (
    <div className="row mainWeather">
      <div className="col wind">
        <h4>💨 Wind {WeatherData.wind} m/sec</h4>
      </div>
      <div className="col">
        <h2>{WeatherData.cityName}</h2>
        <h5>08.10 Saturday</h5>
        <h2>
          <span>{WeatherData.weatherImg}</span>
          <span>{WeatherData.temperature}</span>
          <span className="unit">
            <a href="/" class="active">
              °C{" "}
            </a>
            <a href="/">(°F)</a>
          </span>
          <span>{WeatherData.description}</span>
        </h2>
      </div>
      <div className="col humidity">
        <h4>💧 Humidity {WeatherData.humidity}%</h4>
      </div>
    </div>
  );
}