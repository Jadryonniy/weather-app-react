import React, { useState } from "react";
import "./App.css";

export default function Search() {
    let [message, setMessage] = useState(" ");
    let [city, setCity] = useState(" ");
    
  
    function searchCity(event) {
      event.preventDefault();
      
      setMessage(`In ${city} currently is:`);
    }
  
    function showCity(event) {
      event.preventDefault();
      setCity(event.target.value);
    }
   
    
      return (
        <div>
          <form onSubmit={searchCity}>
            <input
              type="search"
              placeholder="Enter a city/town"
              onChange={showCity}
            />
            <input type="submit" value="Go" className="button" />
          </form>
  
          <h2> {message}</h2>
         
        </div>
      );
    } 
  
  