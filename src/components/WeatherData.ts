interface Wind {
    speed: number;
    degree: number;
}


export interface WeatherData {
    temperature: number;
    weatherDescription: string;
    feelsLike: number;
    temperatureMin: number;
    temperatureMax: number;
    pressure: number;
    visibility: number;
    wind: Wind;
    sunrise: number;
    sunset: number;
    weather: string;
}