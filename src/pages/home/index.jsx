import React, { useState } from "react";

import Search from "../../components/search";
import CurrentWeather from "../../components/currentWeather";
import Forecast from "../../components/forecast";
import { WEATHER_API_KEY, weatherAPIURL } from "../../api";
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
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default Home;
