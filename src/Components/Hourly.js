import React from 'react';
import { HourlyContainer, HourlyBackGroundDiv } from './Styled';
import moment from 'moment';
import * as AiIcons from 'react-icons/ai';

function Hourly(props) {
  const hourlyDisplay = () => {
    let now = moment().format('Do, ha');
    return props.forecast.hourly.map((hour, index) => {
      let time = moment(hour.dt * 1000).format('Do, ha');
      let displayTime = '';
      if (time === now) {
        displayTime = (
          <div>
            <p>Now</p>
          </div>
        );
      } else {
        displayTime = (
          <div>
            <p>{moment(hour.dt * 1000).format('h')}</p>
            <p>{moment(hour.dt * 1000).format('A')}</p>
          </div>
        );
      }
      return (
        <div key={index}>
          {' '}
          <section>{displayTime}</section>
          <img
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt=''
          />
          <p>{Math.floor(hour.temp * 1.8 - 459.67)}°</p>
        </div>
      );
    });
  };

  return (
    <HourlyBackGroundDiv>
      <h1>{<AiIcons.AiOutlineClockCircle />}&nbsp;&nbsp;HOURLY FORECAST</h1>
      <HourlyContainer>
        <>{hourlyDisplay()}</>
      </HourlyContainer>
    </HourlyBackGroundDiv>
  );
}

export default Hourly;
