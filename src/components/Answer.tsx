import {WeatherData} from "./WeatherData";
import {checkWeatherLimits, dataFilter} from "../utils/dataFilter";
import React from "react";
import {DetailView} from "./DetailView";
import {Typography} from "@mui/material";

interface AnswerInterface {
    weatherData: WeatherData | null
}


export const Answer = ({weatherData}: AnswerInterface) => {
    const filteredData = dataFilter(weatherData)
    if (filteredData) {
        const answer: string = checkWeatherLimits(filteredData) ? 'Yes' : 'No'
        return (
            <React.Fragment>
                {answer && <Typography variant={'h2'}>{answer}</Typography>}
                {filteredData && <DetailView weatherData={filteredData}/>}
            </React.Fragment>
        )
    } else {
        return null
    }
}