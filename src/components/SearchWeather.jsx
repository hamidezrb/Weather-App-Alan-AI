import React from "react";
import {FaSearch} from "react-icons/fa";

const SearchWeather = ({enterKeyPressed,getWeather,changeUnits}) => {
  return (
    <div className="section section__inputs">
    <div className="search-container">
    <input className="search-box"
        onKeyDown={enterKeyPressed}
        type="text"
        name="city"
        placeholder="Enter City..."
    />
    <button className="search-button" onClick={getWeather}><FaSearch /></button>
    </div>
    <button className="change_units" onClick={(e) => changeUnits(e)}>°F</button>

  </div>
  );
};

export default SearchWeather;