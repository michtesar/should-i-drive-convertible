import React, {useEffect, useState} from "react";

import {fetchWeatherData} from "../utils/api";
import {Answer} from "./Answer";
import {WeatherData} from "./WeatherData";
import {CurrentWeather} from "./CurrentWeather";

export const WeatherCard: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Fetch user's current location using geolocation API
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const {latitude, longitude} = position.coords;

                    // Fetch weather data based on user's location
                    const data = await fetchWeatherData(latitude, longitude);
                    setWeatherData(data);
                    setLoading(false);
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather().then(() => {
        });
    }, []);

    return (
        <React.Fragment>
            {weatherData && <CurrentWeather temperature={weatherData?.currentWeather.temperature}
                                            temperatureUnits={weatherData?.hourlyUnits.temperature}
                                            weatherCode={weatherData.currentWeather.weatherCode} iconSize={128}/>}
            {loading && <p>Loading...</p>}
            {!weatherData && <p>Cannot load the weather data</p>}
            <Answer weatherData={weatherData}/>
        </React.Fragment>
    )
}