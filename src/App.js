import "./App.css";
import MainForecast from "./MainForecast.js";
import NextDayForecast from "./NextDayForecast";

export default function App() {
  return (
    <div className="App">
      <div>
        <form className="input-group">
          <span className="input-group-text">Today in</span>
          <input
            type="search"
            className="form-control"
            placeholder="Search the location"
            autocomplete="off"
          />

          <input type="submit" className="btn btn-outline-primary" value="OK" />
          <input
            type="submit"
            className="btn btn-outline-secondary"
            value="Your location"
          />
        </form>
      </div>
      <MainForecast />

      <div className="row forecast">
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
        <NextDayForecast />
      </div>

      <div className="autor">
        <a
          href="https://github.com/Jadryonniy/Weather-app"
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
