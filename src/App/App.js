import React, { useState } from 'react';
import Coordinates from '../Components/Coordinates';
import { DesktopContainer, Button } from '../Components/Styled';
import './App.css';

function App() {
  const [locationConsent, setLocationConsent] = useState(false);

  const getLocationConsent = (e) => {
    e.preventDefault();
    setLocationConsent(true);
  };

  return (
    <DesktopContainer>
      {locationConsent === true ? (
        <Coordinates locationConsent={locationConsent} />
      ) : (
        <Button onClick={getLocationConsent}>Allow Locator</Button>
      )}
    </DesktopContainer>
  );
}

export default App;
