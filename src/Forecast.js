import DailyForecast from './DailyForecast';

const Forecast = ({ data }) => {
    
    if (data.daily.length > 7) {
        data.daily.shift();
    }
    
    

    return ( 
        <div className="future-forecast d-flex flex-row overflow-auto">
            { data.daily.map((forecast, index) => (
                <DailyForecast key= {index} data= {forecast} />
            )) }
        </div>
    );
}

export default Forecast;
