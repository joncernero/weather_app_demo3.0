import styled from 'styled-components';

export const DesktopContainer = styled.div`
  background-image: linear-gradient(to bottom, #12a1c0 0%, #07506e 100%);
  font-family: 'Helvetica Neue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  color: white;
  display: flex;
  height: 1200px;
  width: 100vw;
  justify-content: center;
`;

export const AppContainer = styled.div`
  margin: 35px 25px;
  height: auto;
  width: 390px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 25px;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 15px 35px 15px;
`;

export const TodaysWeather = styled.div`
  div {
    /* margin: 10px 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    p:nth-child(1) {
      font-size: 35px;
    }
    p:nth-child(2) {
      font-size: 75px;
      margin: -10px 0 -5px 0;
    }
    p:nth-child(3) {
      font-size: 23px;
    }
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: row;
  }
  img {
    width: 100px;
  }
  p {
    margin: 0 5px;
  }
`;

export const HourlyBackGroundDiv = styled.div`
  height: 150px;
  padding: 0 15px;
  background: rgba(69, 73, 100, 0.25);
  border-radius: 10px;
  margin: 0 15px;

  h1 {
    font-size: 10px;
    margin: 15px 0 10px 0;
    color: gray;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export const HourlyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  overflow: hidden;
  overflow: scroll;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
  }

  img {
    width: 25px;
    margin: 5px;
  }

  section {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      p:nth-child(2) {
        font-size: 10px;
        margin-left: 0;
      }
    }
    margin: 2px;
  }
`;

export const ForecastDivBg = styled.div`
  background: rgba(69, 73, 100, 0.25);
  border-radius: 10px;
  margin: 10px 15px 15px 15px;
  padding: 10px 0 35px 0;
  height: auto;

  h1 {
    font-size: 10px;
    color: gray;
    margin: 10px 15px 0 15px;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export const ForecastContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 35px;
    height: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
    padding: 10px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 50px;

      h5:nth-child(1) {
        color: #12a1c0;
      }
    }
  }

  li div:nth-child(3) {
    width: 125px;
  }
`;

export const Loading = styled.div`
  background-image: linear-gradient(to bottom, #12a1c0 0%, #07506e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  div {
    margin: 10px;
    color: white;
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;

  border: solid 6px #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;

  animation: spin 1s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(100deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 150px;
  padding: 10px;
  margin: 100px;
  font-family: 'Helvetica Neue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px 13px 0px #000000;
`;
