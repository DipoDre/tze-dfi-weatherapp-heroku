import AdvancedInfo from './AdvancedInfo';
import BasicInfo from './BasicInfo';

const WeatherDetails = ({ data }) => {

    return ( 
        <>
                {data.basicDetails && (<BasicInfo data={data.basicDetails}/>)}
                {data.advancedDetails && (<AdvancedInfo data={data.advancedDetails}/>)}
        </>
    );
}

export default WeatherDetails;

