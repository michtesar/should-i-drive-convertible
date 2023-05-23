import axios from "axios";
import {WeatherData} from "../components/WeatherData";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
    const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    console.log(response)
    const {main, weather, visibility, wind, sys} = response.data;

    return {
        temperature: main.temp,
        weatherDescription: weather[0].description,
        feelsLike: main.feels_like,
        temperatureMin: main.temp_min,
        temperatureMax: main.temp_max,
        pressure: main.pressure,
        visibility: visibility,
        wind: wind,
        sunrise: sys.sunrise,
        sunset: sys.sunset,
        weather: weather[0].main
    };
};
