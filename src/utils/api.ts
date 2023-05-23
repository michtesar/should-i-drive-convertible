import axios from "axios";
import {WeatherData} from "../components/WeatherData";
import {getCurrentDate} from "./dates";

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
    const today = getCurrentDate()
    const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&start_date=${today}&end_date=${today}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,snowfall,rain,showers,snow_depth,visibility`
    const response = await axios.get(url);
    const {current_weather, hourly_units, hourly} = response.data;

    return {
        currentWeather: {
            temperature: current_weather.temperature,
            windSpeed: current_weather.windspeed,
            windDirection: current_weather.winddirection,
            weatherCode: current_weather.weathercode
        },
        hourlyUnits: {
            time: hourly_units.time,
            temperature: hourly_units.temperature_2m,
            humidity: hourly_units.relativehumidity_2m,
            windSpeed: hourly_units.windspeed_10m,
            snowfall: hourly_units.snowfall,
            rain: hourly_units.rain,
            showers: hourly_units.showers,
            snowDepth: hourly_units.snow_depth,
            visibility: hourly_units.visibility
        },
        hourly: {
            time: hourly.time,
            temperature: hourly.temperature_2m,
            humidity: hourly.relativehumidity_2m,
            windSpeed: hourly.windspeed_10m,
            snowfall: hourly.snowfall,
            rain: hourly.rain,
            showers: hourly.showers,
            snowDepth: hourly.snow_depth,
            visibility: hourly.visibility
        }
    };
};
