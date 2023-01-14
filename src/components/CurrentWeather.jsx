import React from "react";

const CurrentWeather = ({weather , units}) => {
  return (
    <div className="section section__temperature">
        <div className="icon">
           <h2>{`${weather.name}, ${weather.country}`}</h2>
            <h3>{weather.description}</h3>
            <div className="sky">
                <img src={weather.iconURL} alt="weatherIcon" />
            </div>
        </div>
        <div className="temperature">
            <h1>{`${weather.temp.toFixed()} °${
            units === "metric" ? "C" : "F"
            }`}</h1>
        </div>
    </div>

  );
};

export default CurrentWeather;