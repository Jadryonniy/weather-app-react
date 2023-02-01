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
          <form className="input-group" onSubmit={searchCity}>
          <span className="input-group-text">Today in</span>
          <input
            type="search"
            className="form-control"
            placeholder="Search the location"
            autoComplete="off"
            onChange={showCity}
            
          />

          <input type="submit" className="btn btn-outline-primary" value="OK"  />
          <input
            type="submit"
            className="btn btn-outline-secondary"
            value="Your location"
            
          />
        </form>
  
          <h2> {message}</h2>

          
         
        </div>
      );
    } 
  
  