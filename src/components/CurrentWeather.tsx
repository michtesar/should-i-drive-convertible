import React from "react"
import {WeatherIcon} from "./WeatherIcon";
import {Stack, Typography} from "@mui/material";

export const CurrentWeather = (props: {
    temperature: number,
    temperatureUnits: string,
    weatherCode: number,
    iconSize: number
}) => {
    return (
        <Stack spacing={2} direction={'row'} alignContent={'center'} alignItems={'center'}>
            <WeatherIcon weatherCode={props.weatherCode} iconSize={props.iconSize}/>
            <Typography variant={'h2'}>{props.temperature} {props.temperatureUnits}</Typography>
        </Stack>
    )
}