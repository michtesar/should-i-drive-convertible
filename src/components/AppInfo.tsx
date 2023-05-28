import {WeatherData} from "./WeatherData";
import {Stack, Typography} from "@mui/material";
import {Location} from "./WeatherCard";
import {N_HOURS} from "../config";

interface AppInfoProps {
    weatherData: WeatherData
    location: Location | null
}

function zeroPad(num: number, places: number): string {
    let zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

export const AppInfo = ({weatherData, location}: AppInfoProps) => {
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + N_HOURS * 60 * 60 * 1000);
    const time: string = `${zeroPad(endTime.getHours(), 2)}:${zeroPad(endTime.getMinutes(), 2)}`

    return (
        <Stack spacing={0} margin={'5%'}>
            <Typography variant={'body1'}>
                Location {location?.latitude}&nbsp;{location?.longitude}
            </Typography>
            <Typography variant={'body1'}>{`Until today ${time}`}</Typography>
        </Stack>
    )
}
