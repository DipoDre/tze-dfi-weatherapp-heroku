import moment from 'moment';
import { weatherIcons, getWeatherIcon } from './weatherIcons';

const BasicInfo = ({ data }) => {

    let dayNight = parseInt(`${moment.unix(data.dt).utcOffset(data.timezone / 60).hour()}`);


    return ( 

        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="cards">
                    <h5 className="date pt-4" id="date">{data && moment.unix(data.dt).utcOffset(data.timezone / 60).format('dddd, Do MMMM')}</h5>

                    <h5 className="time" id="time">{data && moment.unix(data.dt).utcOffset(data.timezone / 60).format('LT')}</h5>

                    <h1 id="w-city">{data && data.name}, {data && data.sys.country}</h1>
                    <h5 className="py-4" id="w-icon">
                        <i className={`wi ${getWeatherIcon(weatherIcons, data.weather[0].id, dayNight)} display-1`}></i>
                    </h5>
                    <h1 className="py-2" id="w-temp">{data && data.main.temp}&#8451;</h1>
                    <h4 className="py-3" id="w-desc">{data && data.weather[0].main}</h4>

                </div>
            </div>
        </div>
    );
}

export default BasicInfo;

