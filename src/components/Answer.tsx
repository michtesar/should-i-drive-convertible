import {WeatherData} from "./WeatherData";
import {checkWeatherLimits, dataFilter} from "../utils/dataFilter";
import React from "react";

interface AnswerInterface {
    weatherData: WeatherData | null
}


export const Answer = ({weatherData}: AnswerInterface) => {
    dataFilter(weatherData)

    return (
        <React.Fragment>
            {weatherData && checkWeatherLimits(weatherData) ? 'yes' : 'no'}
            {weatherData && <p>{JSON.stringify(weatherData.hourly, null, 4)}</p>}
            {/*{weatherData && <p>{JSON.stringify(weatherData.hourly.time, null, 4)}</p>}*/}
        </React.Fragment>
    )


}