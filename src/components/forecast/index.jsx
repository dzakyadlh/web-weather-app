import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faDroplet,
  faInfoCircle,
  faSun,
  faWind,
  faCloudMoon,
  faMoon,
  faCloudMoonRain,
  faCloudSun,
  faCloudSunRain,
  faSnowflake,
  faSmog,
  faCloudBolt,
  faCloudShowersHeavy,
  faCloud,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/customScrollbar.css";
import "./style.css";

const daysInWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Forecast = ({ weatherData, forecastData }) => {
  const weatherIcon = (weather) => {
    if (weather === "01d") return faSun;
    else if (weather === "02d") return faCloudSun;
    else if (
      weather === "03d" ||
      weather === "03n" ||
      weather === "04d" ||
      weather === "04n"
    )
      return faCloud;
    else if (weather === "09d" || weather === "09n") return faCloudShowersHeavy;
    else if (weather === "10d") return faCloudSunRain;
    else if (weather === "11d" || weather === "11n") return faCloudBolt;
    else if (weather === "13d" || weather === "13n") return faSnowflake;
    else if (weather === "50d" || weather === "50n") return faSmog;
    else if (weather === "01n") return faMoon;
    else if (weather === "02n") return faCloudMoon;
    else if (weather === "10n") return faCloudMoonRain;
  };

  const windDirection = (degree) => {
    if (degree >= 316 && degree <= 45) return "North";
    else if (degree >= 46 && degree <= 135) return "East";
    else if (degree >= 136 && degree <= 215) return "South";
    else if (degree >= 216 && degree <= 315) return "West";
  };

  const currentDay = new Date().getDay();
  const forecastDays = daysInWeek
    .slice(currentDay, daysInWeek.length)
    .concat(daysInWeek.slice(0, currentDay))
    .concat(daysInWeek.slice(currentDay, daysInWeek.length))
    .concat(daysInWeek.slice(0, currentDay));

  const getFormattedTimezone = (timezoneOffsetInSeconds) => {
    const hours = Math.floor(Math.abs(timezoneOffsetInSeconds) / 3600);
    const minutes = Math.floor((Math.abs(timezoneOffsetInSeconds) % 3600) / 60);
    const sign = timezoneOffsetInSeconds >= 0 ? "+" : "-";
    const formattedTimezone = `UTC ${sign}${hours}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTimezone;
  };

  const getCurrentTimeInTimezone = (timezoneOffsetInSeconds) => {
    const currentTime = new Date();

    const currentOffsetInHours = currentTime.getTimezoneOffset() / 60;
    const currentOffsetInMinutes = currentTime.getTimezoneOffset() % 60;

    const timezoneOffsetInHours = timezoneOffsetInSeconds / 3600;
    const timezoneOffsetInMinutes = timezoneOffsetInSeconds % 3600;

    let hour =
      currentOffsetInHours + timezoneOffsetInHours + currentTime.getHours();
    let minute =
      currentOffsetInMinutes +
      timezoneOffsetInMinutes +
      currentTime.getMinutes();
    if (minute > 60) {
      hour += minute / 60;
      minute = minute % 60;
    }
    console.log(currentTime.getHours());
    console.log(currentOffsetInHours);
    console.log(timezoneOffsetInHours);
    console.log(hour);
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="forecast-container">
      <section className="daily-forecast">
        <header>Daily Forecast</header>
        <div className="daily-forecast-cards">
          {forecastData.forecastResponse.list
            .splice(0, 13)
            .map((item, index) => (
              <div className="forecast-card" key={index}>
                <div className="forecast-card-time">{forecastDays[index]}</div>
                <FontAwesomeIcon
                  icon={weatherIcon(item.weather[0].icon)}
                  className="forecast-card-icon"
                />
                <div className="forecast-card-temp">
                  {Math.round(item.main.temp)}&deg;
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="forecast-parameters">
        <div className="current-forecast-city">{weatherData.name}</div>
        <div className="current-forecast-time">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          <div className="time">
            {getCurrentTimeInTimezone(weatherData.timezone)}{" "}
            {getFormattedTimezone(weatherData.timezone)}
          </div>
        </div>
        <div className="current-forecast-conditions">
          <header>Air Conditions</header>
          <div className="condition">
            <FontAwesomeIcon icon={faInfoCircle} className="condition-icon" />
            <div className="condition-name">Feels like</div>
            <div className="condition-value">
              {weatherData.main.feels_like}&deg;
            </div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faDroplet} className="condition-icon" />
            <div className="condition-name">Relative Humidity</div>
            <div className="condition-value">
              {weatherData.main.humidity}
              <span>%</span>
            </div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faSun} className="condition-icon" />
            <div className="condition-name">Pressure</div>
            <div className="condition-value">
              {weatherData.main.pressure} hPa
            </div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faWind} className="condition-icon" />
            <div className="condition-name">Wind Speed</div>
            <div className="condition-value">
              <span>{weatherData.wind.speed} m/s</span> to{" "}
              <span>{windDirection(weatherData.wind.deg)}</span>
            </div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faEye} className="condition-icon" />
            <div className="condition-name">Visibility</div>
            <div className="condition-value">
              {weatherData.visibility / 1000} km
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forecast;
