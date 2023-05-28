import {WeatherData} from "../components/WeatherData";
import {isAnyBigger, isAnySmaller} from "./helpers";
import {WeatherLimits} from "../WeatherLimits";

interface FilteredHourlyData {
    time: string[];
    rain: number[];
    snowDepth: number[];
    visibility: number[];
    temperature: number[];
    windSpeed: number[];
    snowfall: number[];
    humidity: number[];
    showers: number[];
}

export function dataFilter(weatherData: WeatherData | null): WeatherData | null {
    const nHours = 4

    if (!weatherData) {
        return null;
    }

    const {time, rain, snowDepth, visibility, temperature, windSpeed, snowfall, humidity, showers} = weatherData.hourly;

    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + nHours * 60 * 60 * 1000);

    const filtered: FilteredHourlyData = {
        time: [],
        rain: [],
        snowDepth: [],
        visibility: [],
        temperature: [],
        windSpeed: [],
        snowfall: [],
        humidity: [],
        showers: [],
    };

    for (let index = 0; index < time.length; index++) {
        const currentTimeValue = new Date(time[index]);
        if (currentTimeValue >= currentTime && currentTimeValue <= endTime) {
            filtered.time.push(time[index]);
            filtered.rain.push(rain[index]);
            filtered.snowDepth.push(snowDepth[index]);
            filtered.visibility.push(visibility[index]);
            filtered.temperature.push(temperature[index]);
            filtered.windSpeed.push(windSpeed[index]);
            filtered.snowfall.push(snowfall[index]);
            filtered.humidity.push(humidity[index]);
            filtered.showers.push(showers[index]);
        }
    }

    const data: WeatherData = structuredClone(weatherData)
    data.hourly = filtered

    return data;
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
        !isAnyBigger(humidity, WeatherLimits.maxHumidity) &&
        !isAnyBigger(windSpeed, WeatherLimits.maxWindSpeed)
    )
}