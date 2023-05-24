import React from "react"
import {LimitCheck} from "./DetailView";

interface WeatherCheckInterface {
    name: string
    units: string
    limit: LimitCheck
    threshold: number
}

export const WeatherCheck = ({name, units, limit, threshold}: WeatherCheckInterface) => {
    return (
        <div style={{textAlign: 'left'}}>
            <p>{name} {units}: {limit.ok ? "✅" : "🛑"}</p>
            {!limit.ok &&
                <p>Threshold {threshold} {units} but {limit.min}-{limit.max} {units}</p>
            }
            {limit.ok &&
                <p>Threshold {threshold} {units} average {limit.average.toFixed(0)} {units}</p>
            }
        </div>
    )
}