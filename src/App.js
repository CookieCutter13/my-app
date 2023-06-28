import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
      <Weather defaultCity="New York" />
      <footer>
        THIS PROJECT WAS CODED BY DESIRÉE G AND IS
        <a href="https://github.com/CookieCutter13/my-app" target="blank">
          {" "}
          OPEN-SOURCED{" "}
        </a>
      </footer>
    </div>
    </div>
  );
}
