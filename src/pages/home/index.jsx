import React, { useState } from "react";

import Search from "../../components/search";
import CurrentWeather from "../../components/currentWeather";
import Forecast from "../../components/forecast";
import { WEATHER_API_KEY, weatherAPIURL } from "../../api";
import Sunny from "../../assets/icons/sun.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";
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

  // Promise.all([currentWeatherFetch, forecastFetch])
  //   .then(async (res) => {
  //     const weatherResponse = await response[0].json();
  //     const forecastResponse = await response[1].json();

  //     setCurrentWeather({ city: searchData.label, ...weatherResponse });
  //     setForecast({ city: searchData.label, ...forecastResponse });
  //   })
  //   .catch(console.log);

  return (
    <div className="main-container">
      <div className="current-weather">
        <h1 className="current-city">Surabaya</h1>
        <h2 className="current-temp">26&deg;</h2>
        <h3 className="current-weather-id">Sunny</h3>
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
            <FontAwesomeIcon icon={faSun} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <FontAwesomeIcon icon={faSun} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <FontAwesomeIcon icon={faSun} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <FontAwesomeIcon icon={faSun} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
          <div className="forecast-card">
            <p className="forecast-time">11.00</p>
            <FontAwesomeIcon icon={faSun} className="forecast-icon" />
            <p className="forecast-temp">24&deg;</p>
          </div>
        </div>
        <div className="menu-nav"></div>
      </div>
      {/* <Search onSearchChange={handleOnSearchChange} />
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
      </div> */}
    </div>
  );
};

export default Home;
