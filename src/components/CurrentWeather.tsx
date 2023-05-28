import React from "react"
import {WeatherIcon} from "./WeatherIcon";
import {Stack} from "@mui/material";

export const CurrentWeather = (props: {
    temperature: number,
    temperatureUnits: string,
    weatherCode: number,
    iconSize: number
}) => {
    return (
        <Stack spacing={2}>
            <p>{props.temperature} {props.temperatureUnits}</p>
            <p>{JSON.stringify(props.weatherCode)}</p>
            <WeatherIcon weatherCode={props.weatherCode} iconSize={props.iconSize}/>
        </Stack>
    )
}