const API_KEY = "d8d4304831420b76612a18ce0f7006c1";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, units = "metric") => {

  const CurrentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(CurrentWeatherURL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    // coord: { lat, lon },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;


  const { description, icon } = weather[0];

  // const ForecasURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getWeatherData };