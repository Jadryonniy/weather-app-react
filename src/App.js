import "./App.css";
import MainForecast from"./MainForecast.js"



export default function App() {
  return (
    <div className="App">
      
        
        <MainForecast defaultCity = "Poltava" />
      
      

      <div className="autor">
        <a
          href="https://github.com/Jadryonniy/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="git_link"
        >
          free app on github
        </a>
        <span className=" coder ms-2">coded by V.Koba</span>
      </div>
    </div>
  );
}
