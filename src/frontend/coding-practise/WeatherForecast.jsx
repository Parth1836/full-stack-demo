import React, { useState } from "react";

const WeatherForeCast = () => {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [previousSearches, setPreviousSearches] = useState([]);
  const handleClick = (s="") => {
    if (s?.length && CityData[0][s]) {
      setWeatherData(CityData[0][s]);
    } else if (CityData[0][city || s]) {
      setWeatherData(CityData[0][city]);
      if (previousSearches?.indexOf(city) === -1) {
        setPreviousSearches((prevSearches) => [...prevSearches, city]);
      }
    }
  };

  const handleClick2 = (s) => {
    console.log("s", s);
    handleClick(s);
  };
  
  const CityData = [
    {
      "New York": {
        temperature: 72.5,
        humidity: 60,
      },
      "Los Angeles": {
        temperature: 80.3,
        humidity: 45,
      },
      Chicago: {
        temperature: 68.7,
        humidity: 70,
      },
    },
  ];
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Search</button>
      <li>Temperature:{weatherData?.temperature}</li>
      <li>Humidity:{weatherData?.humidity}</li>
      {previousSearches?.map((s) => (
        <>
          <button onClick={() => handleClick2(s)}>{s}</button>
        </>
      ))}
    </div>
  );
};

export default WeatherForeCast;
