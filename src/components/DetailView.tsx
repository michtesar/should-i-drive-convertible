import React from "react";
import {WeatherData} from "./WeatherData";
import {WeatherCheck} from "./WeatherCheck";
import {WeatherLimits} from "../WeatherLimits";

export interface LimitCheck {
    ok: boolean
    min?: number
    max?: number
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
        return {ok: status}
    } else {
        return {ok: status, min: Math.min(...overLimit), max: Math.max(...overLimit)}
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
        return {ok: status}
    } else {
        return {ok: status, min: Math.min(...overLimit), max: Math.max(...overLimit)}
    }
}


export const DetailView = (props: { weatherData: WeatherData }) => {
    const {hourly, hourlyUnits} = props.weatherData

    const {time, humidity, rain, snowfall, showers, snowDepth, visibility, temperature, windSpeed} = hourly

    return (
        <React.Fragment>
            <div id={'detail-view'} style={{fontSize: 'x-small'}}>
                {/*<p>Time: {JSON.stringify(time)}</p>*/}
                <WeatherCheck
                    name={'Temperature'}
                    units={hourlyUnits.temperature}
                    limit={checkIfSmaller(WeatherLimits.minTemperature, hourly.temperature)}
                />
                <WeatherCheck
                    name={'Humidity'}
                    units={hourlyUnits.humidity}
                    limit={checkIfBigger(WeatherLimits.maxHumidity, hourly.humidity)}
                />
                <WeatherCheck
                    name={'Rain'}
                    units={hourlyUnits.rain}
                    limit={checkIfBigger(WeatherLimits.maxRain, hourly.rain)}
                />
                <WeatherCheck
                    name={'Snowfall'}
                    units={hourlyUnits.snowfall}
                    limit={checkIfBigger(WeatherLimits.maxSnowfall, hourly.snowfall)}
                />
                <WeatherCheck
                    name={'Showers'}
                    units={hourlyUnits.showers}
                    limit={checkIfBigger(WeatherLimits.maxShowers, hourly.showers)}
                />
                <WeatherCheck
                    name={'Snow depth'}
                    units={hourlyUnits.snowDepth}
                    limit={checkIfBigger(WeatherLimits.maxSnowDepth, hourly.snowDepth)}
                />
                <WeatherCheck
                    name={'Visibility'}
                    units={hourlyUnits.visibility}
                    limit={checkIfSmaller(WeatherLimits.minVisibility, hourly.visibility)}
                />
                <WeatherCheck
                    name={'Wind speed'}
                    units={hourlyUnits.windSpeed}
                    limit={checkIfBigger(WeatherLimits.maxWindSpeed, hourly.windSpeed)}
                />
            </div>
        </React.Fragment>
    )
}