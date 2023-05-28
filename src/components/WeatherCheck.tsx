import React from "react"
import {LimitCheck} from "./DetailView";
import "../App.css"
import {Stack, Typography} from "@mui/material";
import {FcCancel, FcCheckmark} from "react-icons/fc";

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
                    <Typography variant={'body2'}>Average
                        from <strong>{limit.min}</strong> to <strong>{limit.max}</strong> {units}</Typography>
                    <FcCancel size={28}/>
                </Stack>
            }
            {limit.ok &&
                <Stack>
                    <Typography variant={'body2'}>Limit is <strong>{threshold}</strong> {units}</Typography>
                    <Typography variant={'body2'}>Average <strong>{limit.average.toFixed(0)}</strong> {units}
                    </Typography>
                    <FcCheckmark size={28}/>
                </Stack>
            }
        </div>
    )
}