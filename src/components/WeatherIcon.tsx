import React from 'react';
import {WiDayFog, WiDayLightning, WiDaySnow, WiDaySunny, WiRain, WiRainMix, WiShowers, WiSnow} from 'react-icons/wi';
import {isNumberInList} from "../utils/helpers";

interface WeatherIconInterface {
    weatherCode: number | undefined
    iconSize: number
}

export const WeatherIcon = ({weatherCode, iconSize}: WeatherIconInterface) => {
    if (!weatherCode && weatherCode !== 0) {return null}

    const clear = [0, 1, 2, 3]
    const fog = [45, 48]
    const drizzle = [56, 57]
    const rain = [61, 63, 65, 66, 67]
    const snow = [71, 73, 75, 77]
    const rainShowers = [80, 81, 82]
    const snowShowers = [85, 86]
    const thunderstorm = [95, 96, 99]

    const icon = () => {

        if (isNumberInList(weatherCode, clear)) {
            return <WiDaySunny size={iconSize}/>
        } else if (isNumberInList(weatherCode, fog)) {
            return <WiDayFog size={iconSize}/>
        } else if (isNumberInList(weatherCode, drizzle)) {
            return <WiRainMix size={iconSize}/>
        } else if (isNumberInList(weatherCode, rain)) {
            return <WiRain size={iconSize}/>
        } else if (isNumberInList(weatherCode, snow)) {
            return <WiSnow size={iconSize}/>
        } else if (isNumberInList(weatherCode, rainShowers)) {
            return <WiShowers size={iconSize}/>
        } else if (isNumberInList(weatherCode, snowShowers)) {
            return <WiDaySnow size={iconSize}/>
        } else if (isNumberInList(weatherCode, thunderstorm)) {
            return <WiDayLightning size={iconSize}/>
        }
    }

    return <>{icon()}</>
}