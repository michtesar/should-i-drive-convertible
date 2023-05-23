import React from 'react';
import {WiCloudy, WiDaySunny, WiRain, WiSnow} from 'react-icons/wi';

interface WeatherIconInterface {
    weather: string | undefined
    iconSize: number
}

export const WeatherIcon = ({weather, iconSize}: WeatherIconInterface) => {
    if (!weather) {
        return null
    }
    const icon = () => {
        switch (weather.toLowerCase()) {
            case 'clear':
                return <WiDaySunny size={iconSize}/>
            case 'clouds':
                return <WiCloudy size={iconSize}/>
            case 'rain':
                return <WiRain size={iconSize}/>
            case 'snow':
                return <WiSnow size={iconSize}/>
            default:
                return null
        }
    }

    return (
        <React.Fragment>
            {icon()}
        </React.Fragment>
    )

}