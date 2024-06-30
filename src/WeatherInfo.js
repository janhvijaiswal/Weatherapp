import React from 'react';

export function WeatherInfo({ weatherData }) {
  return (<>
    <h1>Weather update </h1>
    <div className='info'>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} width={150} height={150} alt='weather' />
      <h2>{weatherData && weatherData.weather[0].main}</h2>
    </div>
    <hr></hr>
    <h3>Feels like: {weatherData && weatherData.main.feels_like} &deg;C</h3>
    <h3>Temperature: {weatherData && weatherData.main.temp} &deg;C</h3>
    <h3>Humidity: {weatherData && weatherData.main.humidity} %</h3>
    <h3>Wind: {weatherData && weatherData.wind.speed} Km/h</h3>
  </>
  );
}