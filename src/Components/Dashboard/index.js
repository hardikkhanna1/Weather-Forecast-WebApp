import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useInfo } from '../../UserInfo';
import { useAuth } from '../../Auth';


const WeatherDashboard = ({DarkMode}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityError,setcityError] = useState(false);
  const {userInfo} = useInfo();
  const {isLoggedIn} = useAuth();
  const API_KEY = '7cf7513e537a4eb18e78f7343c7c54ad';
  var default_city = isLoggedIn ? userInfo.city : ""

  const [city, setCity] = useState(default_city); 
  console.log("darkk mode " ,DarkMode);
  
  useEffect(() => {
    
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
        );

        if (!response.ok) {
          setcityError(true);
          throw new Error('City not found');
        }

        const data = await response.json();
        setcityError(false);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city, API_KEY]);

  return (
    <div className={`${styles.container} ${DarkMode ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>Weather Dashboard</h2>
      <label htmlFor="cityInput" className={styles.label}>Enter City:</label>
      <input className={styles.input}
        type="text"
        id="cityInput"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {cityError && <p className={styles.error}>Enter a valid city name</p>}

      {weatherData && (
        <div className={styles.weatherInfo}>
          <h3 className={styles.h3}>{weatherData.data[0].city_name}, {weatherData.data[0].datetime}</h3>
          <p className={styles.p}>TimeZone: {weatherData.data[0].timezone}</p>
          <p className={styles.p}>Description: {weatherData.data[0].weather.description}</p>
          <p className={styles.p}>Temperature: {weatherData.data[0].temp}°C</p>
          <p className={styles.p}>AQI: {weatherData.data[0].aqi}%</p>
          <p className={styles.p}>Wind Speed: {weatherData.data[0].wind_spd} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
