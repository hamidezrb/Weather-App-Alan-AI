import hotImg from "./images/hot.jpg";
import coldImg from "./images/cold.jpg";
import { useEffect, useState } from "react";
import { getWeatherData } from "./weatherMap";
import WeatherCardData from "./components/WeatherCard";
import SearchWeather from "./components/SearchWeather";
import CurrentWeather from "./components/CurrentWeather";
import Alan from "./Alan.js";


function App() {

  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBackgroundImage] = useState(hotImg);

  const fetchWeatherData = async (city) => {
    const data = await getWeatherData(city, units);
    setWeather(data);

    // dynamic background image
    const threshold = units === "metric" ? 20 : 60;
    if (data.temp <= threshold) setBackgroundImage(coldImg);
    else setBackgroundImage(hotImg);
    return data;
  };

  Alan({fetchWeatherData});


  useEffect(() => {
    fetchWeatherData(city)
  }, [units, city]);


  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
      fetchWeatherData(city);
    }
  };

  const getWeather=async()=>{
    let city = document.getElementsByName('city')[0].value;
    setCity(city)
    fetchWeatherData(city)
   }

   const changeUnits = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
      {weather && (
      <div className="container">
            <SearchWeather enterKeyPressed = {enterKeyPressed} getWeather = {getWeather}  changeUnits = {changeUnits}/>

            <CurrentWeather weather={weather} units={units}/>

            <WeatherCardData weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;