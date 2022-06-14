import React, { useState, useEffect } from 'react';
// import { DateWrap } from '../components/Styled';

function NewDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h5>{date.toLocaleDateString()}</h5>
      <h5>{date.toLocaleTimeString()}</h5>
    </div>
  );
}

export default NewDate;
