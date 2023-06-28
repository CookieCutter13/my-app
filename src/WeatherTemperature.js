import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celciusl");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event);{
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "cleclius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C <a href="/" onClick={showFahrenheit}>ºF </a></span>
    </div>
  );
}else{
  return "F";
}
}