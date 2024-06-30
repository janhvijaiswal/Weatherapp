import React, { useState} from 'react';
import "./App.css"
import {
  AdvancedMarker,
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';
import { WeatherInfo } from './WeatherInfo';

const API_KEY = 'AIzaSyDRIArSlEbI-uCMZzIaC65hZrQXzaUjWMs';
const WEATHER_KEY = "763af14d51c4cd2e494c7c7b1705c381";


const App = () => {

  const [weatherData, setWeatherData] = useState({
    "coord": {
      "lon": 77.2088,
      "lat": 28.6139
    },
    "weather": [
      {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 36.07,
      "feels_like": 43.07,
      "temp_min": 36.07,
      "temp_max": 36.07,
      "pressure": 995,
      "humidity": 59,
      "sea_level": 995,
      "grnd_level": 972
    },
    "visibility": 2800,
    "wind": {
      "speed": 1.54,
      "deg": 300
    },
    "clouds": {
      "all": 75
    },
    "dt": 1719735823,
    "sys": {
      "type": 1,
      "id": 9165,
      "country": "IN",
      "sunrise": 1719705389,
      "sunset": 1719755576
    },
    "timezone": 19800,
    "id": 1260877,
    "name": "Parliament House, Delhi",
    "cod": 200
  });

  function searchPressed(loc) {
    const lat = loc.detail.latLng.lat;
    const lon = loc.detail.latLng.lng;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
  };

  return (
    <div className='container'>
      <div className='controls'>
        <WeatherInfo weatherData={weatherData} />
      </div>
      <div className='map'>
        <APIProvider apiKey={API_KEY} libraries={['marker']}>
          <Map
            mapId={'bf51a910020fa25a'}
            style={{ width: '80vw', height: '100vh' }}
            defaultCenter={{ lat: 28.6139, lng: 77.2088 }}
            defaultZoom={11}
            gestureHandling={'greedy'}
            onClick={(loc) => searchPressed(loc)}
          />
          <AdvancedMarker
            position={{ lat: 28.6139, lng: 77.2088 }}
          />
        </APIProvider>
      </div>
    </div>
  );
};

export default App;
