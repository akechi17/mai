import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentTime());
    };
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <header
      className='app-header grid-padding t-big-text laststag'
      style={{ opacity: "1" }}
    >
      <h1>Rafie & Maira</h1>
      <p>
        <span className='heure'>{currentTime}</span> UTC+7
      </p>
    </header>
  );
};

export default Header;
