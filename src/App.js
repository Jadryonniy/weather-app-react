import "./App.css";
// import MainForecast from"./MainForecast.js"
import NextDayForecast from "./NextDayForecast";
import Search from "./Search.js"

export default function App() {
  return (
    <div className="App">
      
        <Search />
        {/* <MainForecast city = "Poltava" /> */}
      
      <div className="row forecast">
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
      </div>

      <div className="autor">
        <a
          href="https://github.com/Jadryonniy/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="git_link"
        >
          free app on github
        </a>
        <span className="ms-2">coded by V.Koba</span>
      </div>
    </div>
  );
}
