import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faMoon,
  faCloudMoonRain,
  faSun,
  faCloudSun,
  faCloudSunRain,
  faDroplet,
  faSnowflake,
  faWind,
  faCloudRain,
  faClock,
  faCircleInfo,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../../reset.css";
import "./style.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather-container">
      <div className="current-weather-icon">
        <FontAwesomeIcon icon={faCloudMoon} className="icon" />
      </div>
      <div className="current-weather">
        <div className="current-weather-temp">26&deg;</div>
        <div className="current-weather-status">Cloudy</div>
        <div className="current-weather-date">Wednesday, 2 August 2023</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
