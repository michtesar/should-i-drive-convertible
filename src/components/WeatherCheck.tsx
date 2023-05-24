import React from "react"
import {LimitCheck} from "./DetailView";

interface WeatherCheckInterface {
    name: string
    units: string
    limit: LimitCheck
}

export const WeatherCheck = ({name, units, limit}: WeatherCheckInterface) => {
    return (
        <div style={{textAlign: 'left'}}>
            <p>{name} {units}: {limit.ok ? "✅" : "🛑"}</p>
            {!limit.ok &&
                <p>{limit.min}-{limit.max} {units}</p>
            }
        </div>
    )
}