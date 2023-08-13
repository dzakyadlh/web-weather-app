import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCloudRain,
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
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const daysInWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Forecast = ({ weatherData, forecastData }) => {
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

  console.log(forecastDays);

  return (
    <div className="forecast-container">
      <section className="daily-forecast">
        <header>Daily Forecast</header>
        <div className="daily-forecast-cards">
          {forecastData.forecastResponse.list
            .splice(0, 14)
            .map((item, index) => (
              <div className="forecast-card" key={index}>
                <div className="forecast-card-time">{forecastDays[index]}</div>
                <FontAwesomeIcon icon={faMoon} className="forecast-card-icon" />
                <div className="forecast-card-temp">
                  {Math.round(item.main.temp)}&deg;
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="weekly-forecast">
        <ul className="weekly-forecast-days">
          <li className="day">MON</li>
          <li className="day">TUE</li>
          <li className="day current-day">WED</li>
          <li className="day">THU</li>
          <li className="day">FRI</li>
          <li className="day">SAT</li>
          <li className="day">SUN</li>
        </ul>
        <div className="current-forecast-time">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          <div className="time">03:00 UTC +9</div>
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
            <FontAwesomeIcon icon={faCloudRain} className="condition-icon" />
            <div className="condition-name">Rainfall</div>
            <div className="condition-value">1.8 mm</div>
          </div>
          {/* <div className="condition">
            <FontAwesomeIcon icon={faInfoCircle} className="condition-icon" />
            <div className="condition-name">Recommendation</div>
            <div className="condition-value">Bring an umbrella</div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Forecast;
