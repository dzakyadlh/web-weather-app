import ForecastCard from "./forecastCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCloudRain,
  faDroplet,
  faInfoCircle,
  faSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <section className="hourly-forecast">
        <header>Hourly Forecast</header>
        <div className="hourly-forecast-cards">
          <ForecastCard />
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
            <FontAwesomeIcon icon={faDroplet} className="condition-icon" />
            <div className="condition-name">Relative Humidity</div>
            <div className="condition-value">40%</div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faSun} className="condition-icon" />
            <div className="condition-name">UV Index</div>
            <div className="condition-value">3</div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faWind} className="condition-icon" />
            <div className="condition-name">Wind Speed</div>
            <div className="condition-value">5 km/h to East</div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faCloudRain} className="condition-icon" />
            <div className="condition-name">Rainfall</div>
            <div className="condition-value">1.8 mm</div>
          </div>
          <div className="condition">
            <FontAwesomeIcon icon={faInfoCircle} className="condition-icon" />
            <div className="condition-name">Recommendation</div>
            <div className="condition-value">Bring an umbrella</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forecast;
