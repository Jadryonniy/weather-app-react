import React from "react";
import "./App.css";

export default function nextDayForecast() {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Date and Day</h5>
          <p className="card-text">
            <span>Emoji</span> <br />
            <span>day</span>/<span>night</span>
            °C
          </p>
        </div>
      </div>
    </div>
  );
}