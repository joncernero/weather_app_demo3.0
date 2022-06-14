import React, { useState } from 'react';
import NewDate from './NewDate';
import { WeatherContainer, TodaysWeather } from './Styled';
import ReverseGeoCode, {
  ILocation,
  IGeocode,
} from 'bigdatacloud-reverse-geocoding';

function Weather(props) {
  const [cityName, setCityName] = useState();

  const geocode = new ReverseGeoCode();
  const location: ILocation = { lat: props.latitude, long: props.longitude };
  const place: IGeocode = geocode.locate(location);

  const getCityName = () => {
    place.then((a) => {
      setCityName(a.city);
    });
  };

  getCityName();

  return (
    <WeatherContainer>
      <TodaysWeather>
        <NewDate />
        <div>
          <p>{cityName}</p>
          <p>{Math.floor(props.forecast.current.temp * 1.8 - 459.67)}°</p>
          <p>{props.forecast.current.weather[0].description}</p>
        </div>
        <div>
          <p>
            H:{Math.floor(props.forecast.daily[0].temp.min * 1.8 - 459.67)}°
          </p>
          <p>
            L:{Math.floor(props.forecast.daily[0].temp.max * 1.8 - 459.67)}°
          </p>
        </div>
      </TodaysWeather>
    </WeatherContainer>
  );
}

export default Weather;
