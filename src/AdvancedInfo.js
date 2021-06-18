import Forecast from './Forecast';
import Navigation from './Navigation';
import SecondaryInfo from './SecondaryInfo';

const AdvancedInfo = ({ data }) => {

    return ( 
        <>
            <SecondaryInfo data={data}/>
            <Navigation/>
            <Forecast data={data}/>
        </>
    );
}

export default AdvancedInfo;