import {WeatherData} from "../components/WeatherData";
import {getCurrentTime} from "./dates";
import {isAnyBigger, isAnySmaller, isDateLaterThan} from "./helpers";
import {WeatherLimits} from "../WeatherLimits";

export function dataFilter(weatherData: WeatherData | null) {
    if (!weatherData) {
        return null
    }

    const {time} = weatherData.hourly
    const now = getCurrentTime()

    for (let i = 0; i < time.length; i++) {
        const t = new Date(time[i])
        console.log("Time now", now, " vs Time forecast", t, "bigger?", isDateLaterThan(now, t))
        // if (now > t) {
        //     // Pop all unused elements from now to the end of the day
        //     weatherData.hourly.time.splice(i, 1)
        //     weatherData.hourly.temperature.splice(i, 1)
        //     weatherData.hourly.visibility.splice(i, 1)
        //     weatherData.hourly.rain.splice(i, 1)
        //     weatherData.hourly.humidity.splice(i, 1)
        //     weatherData.hourly.windSpeed.splice(i, 1)
        //     weatherData.hourly.snowfall.splice(i, 1)
        //     weatherData.hourly.snowDepth.splice(i, 1)
        //     weatherData.hourly.showers.splice(i, 1)
        // }
    }
}


export function checkWeatherLimits(weatherData: WeatherData): boolean {
    const {temperature, visibility, showers, snowDepth, snowfall, rain, humidity, windSpeed} = weatherData.hourly
    return (
        !isAnySmaller(temperature, WeatherLimits.minTemperature) &&
        !isAnySmaller(visibility, WeatherLimits.minVisibility) &&
        !isAnyBigger(showers, WeatherLimits.maxShowers) &&
        !isAnyBigger(snowDepth, WeatherLimits.maxSnowDepth) &&
        !isAnyBigger(snowfall, WeatherLimits.maxSnowfall) &&
        !isAnyBigger(rain, WeatherLimits.maxRain) &&
        // !isAnyBigger(humidity, WeatherLimits.maxHumidity) &&
        !isAnyBigger(windSpeed, WeatherLimits.maxWindSpeed)
    )
}