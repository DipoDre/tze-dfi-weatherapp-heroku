import { useState, useEffect } from "react";
import WeatherDetails from './WeatherDetails';
import Search from './Search';
import Error from "./Error";
import { api } from './config';

function App() {

  const [city, setCity] = useState("lagos");
  const [weatherData, setWeatherData] = useState();

  let basicDetails = null;
  let advancedDetails = null;
  let errorObject = {
    isError: false,
    errorMessage: ""
  };

  function hideError() {
    setTimeout(function(){
      errorObject.isError = false;
      setWeatherData({ ...weatherData, errorObject });
    }, 5000);
  }

  function emptyCityInput() {
    errorObject.isError = true;
    errorObject.errorMessage = "City can't be blank";
    setWeatherData({ ...weatherData, errorObject });
    hideError();
  }

  let getWeatherDetails = async (city, api) => {
    let uri = `${api.baseUrl}weather?q=${city}&units=metric&appid=${api.key}`;
    basicDetails = await fetch(uri).then(res =>
        res.json()
    );

    if (basicDetails.cod === "404") {
      errorObject.isError = true;
      errorObject.errorMessage = basicDetails.message;

      setWeatherData({ ...weatherData, errorObject });
      hideError();

    } else {
      let lon = basicDetails.coord.lon;
      let lat = basicDetails.coord.lat;

      let forecastUri = `${api.baseUrl}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${api.key}`;
      advancedDetails = await fetch(forecastUri).then(res =>
          res.json()
      );
      setWeatherData({ basicDetails, advancedDetails, errorObject });
    }

  }

  useEffect(() => {
    // if (!city || !api) return;
    getWeatherDetails(city, api).catch(e => {
      errorObject.isError = true;
      errorObject.errorMessage = "An Error Occured, Kindly Retry";
      setWeatherData({ ...weatherData, errorObject });
      hideError();
    });
    
  }, [city]);

  return (
    <>
      { weatherData && weatherData.errorObject.isError && (<Error data={weatherData.errorObject.errorMessage}/>) }
      <Search onSearch={setCity} onEmpty={emptyCityInput}/>
      { weatherData && (<WeatherDetails data={weatherData}/>) }
    </>
  );
}

export default App;

