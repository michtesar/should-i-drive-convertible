import {WeatherData} from "./WeatherData";
import {Stack, Typography} from "@mui/material";
import {Location} from "./WeatherCard";
import {N_HOURS} from "../config";

interface AppInfoProps {
    weatherData: WeatherData
    location: Location | null
}

export const AppInfo = ({weatherData, location}: AppInfoProps) => {
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + N_HOURS * 60 * 60 * 1000);


    return (
        <Stack direction={'row'} spacing={5} margin={'5%'}>
            <Typography variant={'body1'}>
                Location: {location?.latitude}&nbsp;{location?.longitude}
            </Typography>
            <Typography variant={'body1'}>
                {`Until ${endTime.getHours()}:${endTime.getMinutes()}`}
            </Typography>
        </Stack>
    )
}
