import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faMoon,
  faCloudMoonRain,
  faSun,
  faCloudSun,
  faCloudSunRain,
  faSnowflake,
  faCloud,
  faCloudShowersHeavy,
  faCloudBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import "../../reset.css";
import "./style.css";

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsInYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CurrentWeather = ({ data }) => {
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

  const currentDay = new Date().getDay();
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <div className="current-weather-container">
      <div className="current-weather-icon">
        <FontAwesomeIcon
          icon={weatherIcon(data.weather[0].icon)}
          className="icon"
        />
      </div>
      <div className="current-weather">
        <div className="current-weather-temp">
          {Math.round(data.main.temp)}
          <span>&deg;</span>
        </div>
        <div className="current-weather-status">
          {data.weather[0].description}
        </div>
        <div className="current-weather-date">
          {daysInWeek[currentDay]}
          {", "}
          {currentDate} {monthsInYear[currentMonth]} {currentYear}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
