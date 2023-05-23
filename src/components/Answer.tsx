import {WeatherData} from "./WeatherData";
import {checkWeatherLimits, dataFilter} from "../utils/dataFilter";
import React from "react";
import {DetailView} from "./DetailView";

interface AnswerInterface {
    weatherData: WeatherData | null
}


export const Answer = ({weatherData}: AnswerInterface) => {
    dataFilter(weatherData)

    return (
        <React.Fragment>
            {weatherData && checkWeatherLimits(weatherData) ? <h2>Yes</h2> : <h2>No</h2>}
            {weatherData && <DetailView weatherData={weatherData} />}
            {/*{weatherData && <p>{JSON.stringify(weatherData.hourly, null, 4)}</p>}*/}
            {/*{weatherData && <p>{JSON.stringify(weatherData.hourly.time, null, 4)}</p>}*/}
        </React.Fragment>
    )


}