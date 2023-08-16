import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

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
  const [theme, setTheme] = useLocalStorage("theme", "night");

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

        backgroundTheme(weatherResponse.weather[0].icon);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const backgroundTheme = (weatherIcon) => {
    if (
      weatherIcon === "01d" ||
      weatherIcon === "02d" ||
      weatherIcon === "03d" ||
      weatherIcon === "04d"
    )
      setTheme("day");
    else if (
      weatherIcon === "01n" ||
      weatherIcon === "02n" ||
      weatherIcon === "03n" ||
      weatherIcon === "04n"
    )
      setTheme("night");
    else if (
      weatherIcon === "09d" ||
      weatherIcon === "09n" ||
      weatherIcon === "10d" ||
      weatherIcon === "10n" ||
      weatherIcon === "11d" ||
      weatherIcon === "11n"
    )
      setTheme("rain");
    else if (weatherIcon === "13d") setTheme("snowy");
    else if (weatherIcon === "13n") setTheme("snowyNight");
    else if (weatherIcon === "50d" || weatherIcon === "50n") setTheme("foggy");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App" data-theme={theme}>
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
