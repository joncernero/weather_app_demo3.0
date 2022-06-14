import React from 'react';
import { ForecastContainer, ForecastDivBg } from './Styled';
import moment from 'moment';
// import TempBarDisplay from './TempBar';
import * as BsIcons from 'react-icons/bs';

function Forecast(props) {
  // const svnDayLow = Math.min(
  //   ...props.forecast.daily.map((day) => {
  //     return Math.floor(day.temp.min * 1.8 - 459.67);
  //   })
  // );

  // const svnDayHigh = Math.max(
  //   ...props.forecast.daily.map((day) => {
  //     return Math.floor(day.temp.max * 1.8 - 459.67);
  //   })
  // );

  const forecastDisplay = () => {
    let today = moment().format('ddd, Do');
    return props.forecast.daily.map((day, index) => {
      let date = moment(day.dt * 1000).format('ddd, Do');
      let displayDay = '';
      if (today === date) {
        displayDay = 'Today';
      } else {
        displayDay = moment(day.dt * 1000).format('ddd');
      }

      // let dayLow = Math.floor(day.temp.min * 1.8 - 459.67);

      // let dayHigh = Math.floor(day.temp.max * 1.8 - 459.67);

      return (
        <li key={index}>
          <div>
            {' '}
            <p>{displayDay}</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt=''
            />
          </div>
          <div>
            <h5>Low: {Math.floor(day.temp.min * 1.8 - 459.67)}°</h5>&nbsp;&nbsp;
            <h5>High: {Math.floor(day.temp.max * 1.8 - 459.67)}°</h5>
          </div>
        </li>
      );
    });
  };

  return (
    <ForecastDivBg>
      <h1>{<BsIcons.BsCalendar3 />}&nbsp;&nbsp;7-DAY FORECAST</h1>
      <ForecastContainer>
        <ul>{forecastDisplay()}</ul>
      </ForecastContainer>
    </ForecastDivBg>
  );
}

export default Forecast;
