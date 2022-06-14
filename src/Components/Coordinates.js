import React, { useState, useEffect } from 'react';
import { AppContainer, Loading, Spinner } from './Styled';
import ComponentIndex from './ComponentIndex';

function Coordinates(props) {
  const [coordinates, setCoordinates] = useState(undefined);

  useEffect(() => {
    if (props.locationConsent === true) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinates(position.coords);
      });
    }
  }, [props.locationConsent]);

  if (!coordinates) {
    return (
      <>
        <Loading>
          <Spinner />
          <div>"Fetching Your Local Forecast"</div>
        </Loading>
      </>
    );
  }

  return (
    <>
      <AppContainer>
        <ComponentIndex
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        />
      </AppContainer>
    </>
  );
}

export default Coordinates;
