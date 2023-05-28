import React from "react"
import {LimitCheck} from "./DetailView";
import "../App.css"
import {Stack, Typography} from "@mui/material";

interface WeatherCheckInterface {
    name: string
    units: string
    limit: LimitCheck
    threshold: number
}

export const WeatherCheck = ({name, units, limit, threshold}: WeatherCheckInterface) => {
    return (
        <div className={`WeatherCheck ${limit.ok ? 'ok' : 'notOK'}`} style={{textAlign: 'left'}}>
            <Typography variant={'h6'}>{name} ({units})</Typography>
            {!limit.ok &&
                <Stack>
                    <Typography variant={'body2'}>Limit is <strong>{threshold} {units}</strong></Typography>
                    <Typography variant={'body2'}>Average from <strong>{limit.min}</strong> to <strong>{limit.max}</strong> {units}</Typography>
                </Stack>
            }
            {limit.ok &&
                <Stack>
                    <Typography variant={'body2'}>Limit is <strong>{threshold}</strong> {units}</Typography>
                    <Typography variant={'body2'}>Average <strong>{limit.average.toFixed(0)}</strong> {units}</Typography>
                </Stack>
            }
        </div>
    )
}