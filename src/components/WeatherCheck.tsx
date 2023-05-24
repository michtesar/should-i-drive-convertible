import React from "react"
import {LimitCheck} from "./DetailView";
import "../App.css"

interface WeatherCheckInterface {
    name: string
    units: string
    limit: LimitCheck
    threshold: number
}

export const WeatherCheck = ({name, units, limit, threshold}: WeatherCheckInterface) => {
    return (
        <div className={`WeatherCheck ${limit.ok ? 'ok' : 'notOK'}`} style={{textAlign: 'left'}}>
            <h2>{name} ({units})</h2>
            {!limit.ok &&
                <div>
                    <p>Limit is <strong>{threshold} {units}</strong></p>
                    <p>Average from <strong>{limit.min}</strong> to <strong>{limit.max}</strong> {units}</p>
                </div>
            }
            {limit.ok &&
                <div>
                    <p>Limit is <strong>{threshold}</strong> {units}</p>
                    <p>Average <strong>{limit.average.toFixed(0)}</strong> {units}</p>
                </div>
            }
        </div>
    )
}