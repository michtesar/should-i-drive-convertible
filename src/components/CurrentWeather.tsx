import React from "react"
import {WeatherIcon} from "./WeatherIcon";

export const CurrentWeather = (props: {
    temperature: number,
    temperatureUnits: string,
    weatherCode: number,
    iconSize: number
}) => {
    return (
        <React.Fragment>
            <p>{props.temperature} {props.temperatureUnits}</p>
            <WeatherIcon weatherCode={props.weatherCode} iconSize={props.iconSize}/>
        </React.Fragment>
    )
}