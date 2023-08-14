import React, { useState, useEffect } from "react";

import Search from "./components/search";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
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
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <main className="main-container">
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && currentWeather && (
          <Forecast weatherData={currentWeather} forecastData={forecast} />
        )}
      </main>
    </div>
  );
}

export default App;
