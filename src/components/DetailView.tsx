import React from "react";
import {WeatherData} from "./WeatherData";

export const DetailView = (props: { weatherData: WeatherData }) => {
    const {hourly, hourlyUnits} = props.weatherData

    const {time, humidity, rain, snowfall, showers, snowDepth, visibility, temperature, windSpeed} = hourly

    return (
        <React.Fragment>
            <div id={'detail-view'} style={{fontSize: 'x-small'}}>
                <p>Time: {JSON.stringify(time)}</p>
                <p>Humidity {hourlyUnits.humidity}: {JSON.stringify(humidity)}</p>
                <p>Rain {hourlyUnits.rain}: {JSON.stringify(rain)}</p>
                <p>Snowfall {hourlyUnits.snowfall}: {JSON.stringify(snowfall)}</p>
                <p>Rain showers {hourlyUnits.showers}: {JSON.stringify(showers)}</p>
                <p>Snow depth {hourlyUnits.snowDepth}: {JSON.stringify(snowDepth)}</p>
                <p>Visibility {hourlyUnits.visibility}: {JSON.stringify(visibility)}</p>
                <p>Temperature {hourlyUnits.temperature}: {JSON.stringify(temperature)}</p>
                <p>Wind speed {hourlyUnits.windSpeed}: {JSON.stringify(windSpeed)}</p>
            </div>
        </React.Fragment>
    )
}