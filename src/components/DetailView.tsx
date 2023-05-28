import React from "react";
import {WeatherData} from "./WeatherData";
import {WeatherCheck} from "./WeatherCheck";
import {WeatherLimits} from "../utils/WeatherLimits";
import {Stack} from "@mui/material";

export interface LimitCheck {
    ok: boolean
    min?: number
    max?: number
    average: number
}

function mean(array: number[]): number {
    const sum = array.reduce((a, b) => a + b, 0);
    return (sum / array.length) || 0;
}


function checkIfBigger(threshold: number, values: number[]): LimitCheck {
    let overLimit: number[] = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] > threshold) {
            overLimit.push(values[i])
        }
    }

    const status = overLimit.length === 0
    if (status) {
        return {ok: status, average: mean(values)}
    } else {
        return {ok: status, min: Math.min(...overLimit), max: Math.max(...overLimit), average: mean(values)}
    }
}

function checkIfSmaller(threshold: number, values: number[]): LimitCheck {
    let overLimit: number[] = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] < threshold) {
            overLimit.push(values[i])
        }
    }

    const status = overLimit.length === 0
    if (status) {
        return {ok: status, average: mean(values)}
    } else {
        return {ok: status, min: Math.min(...overLimit), max: Math.max(...overLimit), average: mean(values)}
    }
}


export const DetailView = (props: { weatherData: WeatherData }) => {
    const {hourly, hourlyUnits} = props.weatherData
    const {humidity, rain, snowfall, showers, snowDepth, visibility, temperature, windSpeed} = hourly

    return (
        <Stack>
            <WeatherCheck
                name={'Temperature'}
                units={hourlyUnits.temperature}
                limit={checkIfSmaller(WeatherLimits.minTemperature, temperature)}
                threshold={WeatherLimits.minTemperature}
            />
            <WeatherCheck
                name={'Humidity'}
                units={hourlyUnits.humidity}
                limit={checkIfBigger(WeatherLimits.maxHumidity, humidity)}
                threshold={WeatherLimits.maxHumidity}
            />
            <WeatherCheck
                name={'Rain'}
                units={hourlyUnits.rain}
                limit={checkIfBigger(WeatherLimits.maxRain, rain)}
                threshold={WeatherLimits.maxRain}
            />
            <WeatherCheck
                name={'Snowfall'}
                units={hourlyUnits.snowfall}
                limit={checkIfBigger(WeatherLimits.maxSnowfall, snowfall)}
                threshold={WeatherLimits.maxSnowfall}
            />
            <WeatherCheck
                name={'Showers'}
                units={hourlyUnits.showers}
                limit={checkIfBigger(WeatherLimits.maxShowers, showers)}
                threshold={WeatherLimits.maxShowers}
            />
            <WeatherCheck
                name={'Snow depth'}
                units={hourlyUnits.snowDepth}
                limit={checkIfBigger(WeatherLimits.maxSnowDepth, snowDepth)}
                threshold={WeatherLimits.maxSnowDepth}
            />
            <WeatherCheck
                name={'Visibility'}
                units={hourlyUnits.visibility}
                limit={checkIfSmaller(WeatherLimits.minVisibility, visibility)}
                threshold={WeatherLimits.minVisibility}
            />
            <WeatherCheck
                name={'Wind speed'}
                units={hourlyUnits.windSpeed}
                limit={checkIfBigger(WeatherLimits.maxWindSpeed, windSpeed)}
                threshold={WeatherLimits.maxWindSpeed}
            />
        </Stack>
    )
}