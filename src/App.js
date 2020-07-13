import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <WeatherEngine location="Sydney, au" />
        {/* <WeatherEngine location="Phoenix, us" /> */}
      </div>
    </div>
  );
}

export default App;
