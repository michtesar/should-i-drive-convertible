import {WeatherData} from "./WeatherData";
import {checkWeatherLimits, dataFilter} from "../utils/dataFilter";
import React from "react";
import {DetailView} from "./DetailView";

interface AnswerInterface {
    weatherData: WeatherData | null
}


export const Answer = ({weatherData}: AnswerInterface) => {
    const filteredData = dataFilter(weatherData)

    return (
        <React.Fragment>
            {filteredData && checkWeatherLimits(filteredData) ? <h2>Yes</h2> : <h2>No</h2>}
            {filteredData && <DetailView weatherData={filteredData}/>}
        </React.Fragment>
    )
}