import moment from 'moment';

const SecondaryInfo = ({ data }) => {
    
    return ( 
        <div className="container">
            <div className="row more-details mb-4">
                <div className="others" id="current-weather-items">
                    <div className="weather-item">
                        <p>Humidity</p>
                        <p id="c-humidity">{data.current.humidity}&#37;</p>
                    </div>
                    <div className="weather-item">
                        <p>Pressure</p>
                        <p id="c-pressure">{data.current.pressure} hPa</p>
                    </div>
                    <div className="weather-item">
                        <p>Speed</p>
                        <p id="c-speed">{data.current.wind_speed} m/s</p>
                    </div>
                    <div className="weather-item">
                        <p>Sunrise</p>
                        <p id="c-sunrise">{moment.unix(data.current.sunrise).utcOffset(data.timezone_offset / 60).format('LT')}</p>
                    </div>
                    <div className="weather-item">
                        <p>Sunset</p>
                        <p id="c-sunset">{moment.unix(data.current.sunset).utcOffset(data.timezone_offset / 60).format('LT')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondaryInfo;
