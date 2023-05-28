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

    return (
        <React.Fragment>
            {filteredData && checkWeatherLimits(filteredData) ?
                <Typography variant={'h2'}>Yes</Typography> : <Typography variant={'h2'}>No</Typography>}
            {filteredData && <DetailView weatherData={filteredData}/>}
        </React.Fragment>
    )
}