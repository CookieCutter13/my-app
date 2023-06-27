import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City........"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />{" "}
            </div>
          </div>
        </form>

        <h2>New York </h2>
        <ul>
          <li>Wednesday 7</li>
          <li>mostly stupid</li>{" "}
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
            />
            <div className="float-left">
              <span className="temperature">{Math.round(temperature)}</span>
              <span className="unit">ºF</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>precip: 15%</li>
              <li>humid: a lot</li>
              <li>wind:100mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "27o0abe982dat860dde4ff04f45c83ea";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
