import { useRef } from "react";

const Search = ({ onSearch, onEmpty }) => {
    const cityName = useRef();

    const clicked = e => {
        const city = cityName.current.value;
        if (!city) {
            onEmpty();
        } else {
            onSearch(city);
            cityName.current.value = "";
        }
    }

    const entered = e => {
        if (e.key === 'Enter') {
            clicked(e);
        }
    }
    
    return ( 
        <div className="container">
            <div className="row location">
                <div className="col-12 col-sm-6 mt-3">
                    <input onKeyUp={ entered } ref={ cityName } type="text" className="form-control" id="city-input" placeholder="Enter City..."/>
                </div>
                <div className="col-12 col-sm-6 mt-3">
                    <button onClick={ clicked } className="btn text-white bg-orange-b form-control" type="button" id="get-weather">Get Weather</button>
                </div>
            </div>
        </div>
    );
}

export default Search;
