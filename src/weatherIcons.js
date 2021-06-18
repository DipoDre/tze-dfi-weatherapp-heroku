
export let weatherIcons = {
    thunderstorm: "wi-day-thunderstorm",
    drizzle: "wi-day-sleet",
    rain: "wi-day-storm-showers",
    snow: "wi-day-snow",
    atmosphere: "wi-day-fog",
    clear: "wi-day-sunny",
    clouds: "wi-day-fog",

    nightThunderstorm: "wi-night-thunderstorm",
    nightDrizzle: "wi-night-sleet",
    nightRain: "wi-night-storm-showers",
    nightSnow: "wi-night-snow",
    nightAtmosphere: "wi-night-fog",
    nightClear: "wi-night-clear",
    nightClouds: "wi-night-fog"
};


// Get the appriopriate weather illustration
export function getWeatherIcon(icons, rangeId, dayHour=55) {
    if((6 <= dayHour && dayHour <= 18) || dayHour === 55){
        switch(true){
            case rangeId >= 200 && rangeId <= 232:
                return weatherIcons.thunderstorm;
            case rangeId >= 300 && rangeId <= 321:
                return weatherIcons.drizzle;
            case rangeId >= 500 && rangeId <= 531:
                return weatherIcons.rain;
            case rangeId >= 600 && rangeId <= 622:
                return weatherIcons.snow;
            case rangeId >= 701 && rangeId <= 781:
                return weatherIcons.atmosphere;
            case rangeId === 800:
                return weatherIcons.clear;
            case rangeId >= 801 && rangeId <= 804:
                return weatherIcons.clouds;
            default:
                return weatherIcons.clear;
        }
    } else{
        switch(true){
            case rangeId >= 200 && rangeId <= 232:
                return weatherIcons.nightThunderstorm;
            case rangeId >= 300 && rangeId <= 321:
                return weatherIcons.nightDrizzle;
            case rangeId >= 500 && rangeId <= 531:
                return weatherIcons.nightRain;
            case rangeId >= 600 && rangeId <= 622:
                return weatherIcons.nightSnow;
            case rangeId >= 701 && rangeId <= 781:
                return weatherIcons.nightAtmosphere;
            case rangeId === 800:
                return weatherIcons.nightClear;
            case rangeId >= 801 && rangeId <= 804:
                return weatherIcons.nightClouds;
            default:
                return weatherIcons.nightClear;
        }
    }

}


/* // Create icon for current weather
export function createNewIcon(icons, rangeId, dayHour) {
    let newIcon = getWeatherIcon(icons, rangeId, dayHour);
    return newIcon;
} */

