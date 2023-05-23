import React, {useEffect, useState} from "react";

import {fetchWeatherData} from "../utils/api";
import {WeatherData} from "./WeatherData";
import {WeatherIcon} from "./WeatherIcon";

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

        fetchWeather().then(r => {
        });
    }, []);

    return (
        <React.Fragment>
            <p>{JSON.stringify(weatherData, null, 2)}</p>
            <WeatherIcon weather={weatherData?.weather} iconSize={64}/>
            {loading && <p>Loading...</p>}
            {!weatherData && <p>Cannot load the weather data</p>}
        </React.Fragment>
    )
}