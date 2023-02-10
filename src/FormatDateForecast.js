import React from "react"
export default function FormatDateForecast(props){
   let days = ["Sun","Mon","Tue","Wed", "Thu", "Fri","Sat"];
   let day = days[new Date(props.date).getDay()];
   let date = new Date(props.date).getDate(); 
   if (date <10){ date = `0${date}`}
   let month = (new Date(props.date).getMonth()+1);
   if (month <10){ month = `0${month}`}
   
   
    return <div>
        {day} {date}.{month}
    </div>
}