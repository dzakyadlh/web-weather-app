import config from "./config";

export const geoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": config.GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = config.WEATHER_API_KEY;
