import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h2>New York</h2>
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
          <strong>6º</strong> C
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
}
