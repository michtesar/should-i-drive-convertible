import React from "react"
import {LimitCheck} from "./DetailView";

interface WeatherCheckInterface {
    name: string
    units: string
    limit: LimitCheck
}

export const WeatherCheck = ({name, units, limit}: WeatherCheckInterface) => {
    return (
        <React.Fragment>
            <p>{name} {units}: {JSON.stringify(limit, null, 2)}</p>
        </React.Fragment>
    )
}