import React, { useState, useEffect } from "react";

import Search from "./components/search";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/forecast";
import { WEATHER_API_KEY, weatherAPIURL } from "./api";
import SunnyIcon from "./assets/icons/Sun_fill.svg";
import SunnyIconCurrent from "./assets/icons/Sun_fill_current.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <main className="main-container">
        <CurrentWeather />
        <section className="details">
          <div className="hourly-forecast"></div>
          <div className="daily-params"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
