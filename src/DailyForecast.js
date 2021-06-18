import moment from 'moment';
import { weatherIcons, getWeatherIcon } from './weatherIcons';

const DailyForecast = ({ data }) => {

    return (

        <div className="weather-forecast day" id="weather-forecast">
            <div className="box"><div className="day">{moment.unix(data.dt).format('ddd')}</div></div>
            <div className="box boxIcon"><i className={`wi ${getWeatherIcon(weatherIcons, data.weather[0].id)} h1`}></i></div>
            <div className="box"><div className="temp">{data.temp.min}&#8451; - {data.temp.max}&#8451;</div></div>
            <div className="box boxDesc"><div className="fdesc mt-4">{data.weather[0].description}</div></div>
        </div>
    );
}

export default DailyForecast;


