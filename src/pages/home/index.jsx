import React, { useState } from "react";

import Search from "../../components/search";
import CurrentWeather from "../../components/currentWeather";
import Forecast from "../../components/forecast";
import { WEATHER_API_KEY, weatherAPIURL } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import SunnyIcon from "../../assets/icons/Sun_fill.svg";
import SunnyIconCurrent from "../../assets/icons/Sun_fill_current.png";
import "./style.css";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherAPIURL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${weatherAPIURL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
  };

  return (
    <div className="main-container">
      <div className="current-weather">
        <p className="current-city">Surabaya</p>
        <p className="current-temp">26&deg;</p>
        <p className="current-weather-id">Sunny</p>
      </div>
      <div className="forecast-and-nav">
        <div className="forecast-nav">
          <div className="dragger"></div>
          <div className="forecast-types">
            <p className="forecast-type">Hourly Forecast</p>
            <p className="forecast-type">Weekly Forecast</p>
          </div>
        </div>
        <div className="forecast">
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <img src={SunnyIcon} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card forecast-card-current">
            <p className="forecast-time forecast-time-current">11.00</p>
            <img
              src={SunnyIconCurrent}
              className="forecast-icon forecast-icon-current"
            />
            <p className="forecast-temp forecast-temp-current">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <img src={SunnyIcon} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <img src={SunnyIcon} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <img src={SunnyIcon} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
        </div>
      </div>
      <div className="menu-nav">
        <FontAwesomeIcon icon={faStar} className="nav-icon" />
        <div className="nav-location">
          <FontAwesomeIcon icon={faLocationDot} className="nav-location-icon" />
        </div>
        <FontAwesomeIcon icon={faGear} className="nav-icon" />
      </div>
    </div>
  );
};

export default Home;

{
  /* <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <div className="current-weather">
        <img
          src={Sunny}
          alt="current-weather-icon"
          className="current-weather-icon"
        />
        <h1 className="current-temp">
          26<span>&deg;C</span>
        </h1>
        <h2 className="current-cond">Sunny</h2>
        <div className="current-params">
          <div className="params">
            <FontAwesomeIcon icon={faWind} className="current-params-icon" />
            <p>
              2<span>m/s</span>
            </p>
          </div>
          <div className="params">
            <FontAwesomeIcon icon={faDroplet} className="current-params-icon" />
            <p>
              45<span>%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="daily-forecast">
        <div className="forecast-card">
          <img src={Sunny} alt="forecast-icon" className="forecast-icon" />
          <h3 className="forecast-temp">
            27<span>&deg;C</span>
          </h3>
          <h4 className="forecast-day">Thursday</h4>
        </div>
        <div className="forecast-card">
          <img src={Sunny} alt="forecast-icon" className="forecast-icon" />
          <h3 className="forecast-temp">
            27<span>&deg;C</span>
          </h3>
          <h4 className="forecast-day">Thursday</h4>
        </div>
        <div className="forecast-card">
          <img src={Sunny} alt="forecast-icon" className="forecast-icon" />
          <h3 className="forecast-temp">
            27<span>&deg;C</span>
          </h3>
          <h4 className="forecast-day">Thursday</h4>
        </div>
      </div> */
}
