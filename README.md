## CS50 FINAL PROJECT 2022 - Voice controlled React WEATHER APP with Alan AI Voice Assistant
[Voice controlled React Weather APP](https://youtu.be/ZxmHlLxmB_Y)

I Built a responsive weather app using React JS In which you will be able to search for a specific location in the world and it will display all the important weather details about your location. It can fetch current weather data from an open weather API and use Alan AI in my app which allows user instead of manually typing a city, simply ask Alan to fetch weather information about a city via voice command.Voice Communication is the feature of my app. There are many projects with the traditional search bar to search the weather report of the location but I thought of trying out something new. I tried integarting voice commands into this app so that it may facilitate user to use commands to search the weather report of any location.

## Alan AI :
First, I create a new account in [Alan AI website](https://alan.app/) and I create a new project with the name alen_app. When click on Open Project it shows me Alan AI Studio:
![Alan AI Studio](https://i.ibb.co/SVyK6Nh/Screenshot-2020-08-03-at-21-24-23.png)

This is where we write Alan scripts that define how Alan will interact with our React app. When you click the Alan button on the bottom right corner of my app and ask it get me the weather in my specific location, Alan will respond back to you and display all the important weather details.


## Setup:
run ```npm install @alan-ai/alan-sdk-web — save``` && ```npm i react-icons``` && ```npm start``` to start development server

## Material:
for fetching the data I use open weather map API for getting our data (Open weather API: https://openweathermap.org/
Alan AI Voice Assistant (https://alan.app/)


## Description:
- components
	- SearchWeather.jsx : Add an input field that will be used to grab the location and a button that changes units inside this component
	- CurrentWeather.jsx : Display weather data from our location (city,country,temperature,icon,description)
	- WeatherCard.jsx : Display other details from our location (MinTemperature , MaxTemperature , Feels Like , Pressure , Humidity , Wind Speed)
	- WeatherCard.css : Style for WeatherCard.jsx

 - Images
	 - cold.jpg
	 - hot.jpg

 - weatherMap.js
	 - Getting json data from Current weather report API

 - Alan.js
	 -	use Alan AI SDK in our React app that you can render on your web page and interact with it
 - App.js
	 - Render components inside App.js (This App also has Dynamic backgrounds so when the weather is hot we have the sunny background and when the weather is cold we will have the snowy background) 
	 - Invoke Alan.js inside App.js






