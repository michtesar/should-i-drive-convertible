export interface WeatherData {
    currentWeather: {
        temperature: number;
        windSpeed: number;
        windDirection: number;
        weatherCode: number;
    };
    hourlyUnits: {
        time: string;
        temperature: string;
        humidity: string;
        windSpeed: string;
        snowfall: string;
        rain: string;
        showers: string;
        snowDepth: string;
        visibility: string;
    };
    hourly: {
        time: string[];
        temperature: string[];
        humidity: string[];
        windSpeed: string[];
        snowfall: string[];
        rain: string[];
        showers: string[];
        snowDepth: string[];
        visibility: string[];
    };
}
