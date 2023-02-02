import React from "react"
export default function FormattedDate(props){
   let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
   let day = days[props.date.getDay()];
   let date = props.date.getDate(); 
   if (date <10){ date = `0${date}`}
   let month = (props.date.getMonth()+1);
   if (month <10){ month = `0${month}`}
   let year = props.date.getFullYear();
   
    return <div>
        {day} {date}.{month}.{year}
    </div>
}