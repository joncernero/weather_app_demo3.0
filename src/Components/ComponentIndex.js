import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Forecast from './Forecast';
import Hourly from './Hourly';

const ComponentIndex = (props) => {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(true);
  console.log('welcome to weather app!');

  useEffect(() => {
    function fetchForecast() {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((info) => {
          setForecast(info);
        })
        .finally(() => setLoading(false));
    }
    fetchForecast();
  }, [props.latitude, props.longitude]);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <Weather forecast={forecast} />
      <Hourly forecast={forecast} />
      <Forecast forecast={forecast} />
    </>
  );
};

export default ComponentIndex;
