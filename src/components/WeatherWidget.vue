<template>
  <q-page class="weather-page">
    <q-img
      src="../assets/paris.jpg"
      class="background-image"
      :basic-ratio="1"
    >
      <div class="overlay"></div>
    </q-img>

    <q-card class="weather-widget">
      <q-card-section class="widget-header">
        <h2 class="widget-title">Cek Cuaca</h2>

        <q-input
          v-model="location"
          filled
          rounded
          placeholder="Bagaimana Cuaca Dikota Anda Saat Ini...."
          dense
          @keyup.enter="fetchWeatherData"
        >
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
          <template v-slot:append>
            <q-btn @click="fetchWeatherData" color="primary" label="Cari" dense />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="weather-data" v-if="weatherData">
        <q-img
          :src="getWeatherIconUrl(weatherData.weather[0].icon)"
          alt="Weather Icon"
          class="weather-icon"
        />

        <div class="weather-details">
          <p class="location">{{ weatherData.name }}</p>
          <p class="temperature">{{ convertTemperature(weatherData.main.temp) }}°{{ temperatureUnit }}</p>
          <p class="description">{{ weatherData.weather[0].description }}</p>
        </div>

        <q-separator />

        <div class="additional-weather-info">
          <q-card-section>
            <q-icon name="air" />
            <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
          </q-card-section>

          <q-card-section>
            <q-icon name="opacity" />
            <p>Humidity: {{ weatherData.main.humidity }}%</p>
          </q-card-section>

          <q-card-section>
            <q-icon name="speed" />
            <p>Pressure: {{ weatherData.main.pressure }} hPa</p>
          </q-card-section>
        </div>
      </q-card-section>

      <q-card-section class="loader" v-else>
        <q-spinner color="primary" size="50px">
          <span class="text-h6">Mencari cuaca...</span>
        </q-spinner>
      </q-card-section>
</q-card>
    <q-btn @click="toggleTemperatureUnit" color="secondary" class="toggle-button">
      ubah ke {{ temperatureUnit === 'C' ? 'Fahrenheit' : 'Celsius' }}
    </q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const location = ref('');
const weatherData = ref(null);
const temperatureUnit = ref('C');

const fetchWeatherData = async () => {
  try {
    const apiKey = "dceedb672c545261fd70bc952fcd1fb9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    weatherData.value = data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherData.value = null;
  }
};

const getWeatherIconUrl = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}.png`;
};

const convertTemperature = (temp) => {
  if (temperatureUnit.value === 'C') {
    return (temp - 273.15).toFixed(1);
  } else {
    return ((temp - 273.15) * 9/5 + 32).toFixed(1);
  }
};

const toggleTemperatureUnit = () => {
  temperatureUnit.value = temperatureUnit.value === 'C' ? 'F' : 'C';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.weather-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  padding: 20px;
  color: #fff;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.weather-widget {
  max-width: 500px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  margin-top: -20px;
}

.widget-header {
  background-color: #42a5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
}

.widget-title {
  font-size: 28px;
  margin-bottom: 15px;
}

.weather-data {
  padding: 20px;
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  animation: rotate 14s linear ;
}

.weather-details {
  margin-top: 10px;
}

.location {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.temperature {
  font-size: 36px;
  color: #ffeb3b;
  font-weight: bold;
  margin-top: 5px;
}

.description {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 10px;
}

.additional-weather-info {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.loader {
  padding: 20px;
}

.additional-info {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: left;
  color: #eee;
}

.toggle-button {
  margin-top: -50px;
  font-size: 16px;
  z-index: 1;
  margin-right:-200px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
