<template>
  <div class="weather-widget p-4 rounded shadow">
    <h2 class="widget-title mb-4">Cek Cuaca</h2>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control rounded-start"
        v-model="location"
        placeholder="Bagaimana kondisi cuaca dikota anda.."
      />
      <div class="input-group-append">
        <button class="btn btn-primary rounded-end" type="button" @click="fetchWeatherData">
          Cari
        </button>
      </div>
    </div>

    <div v-if="weatherData" class="weather-data">
      <p class="location mb-2">{{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        {{ Math.round(weatherData.main.temp - 273.15) }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        {{ weatherData.weather[0].description }}
      </p>
      <img v-if="weatherData.weather" :src="getWeatherIconUrl(weatherData.weather[0].icon)" alt="Weather Icon" class="weather-icon">
    </div>

    <p v-else class="loader">
      <i class="fas fa-spinner fa-spin"></i> Mencari cuaca...
    </p>

    <div class="additional-info mt-4">
      <p><strong>Informasi Tambahan:</strong> Menampilkan data cuaca secara real-time</p>
      <p>-------------Temperatur dihitung dari data OpenWeatherMap-------------------</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const location = ref('');
const weatherData = ref(null);

const fetchWeatherData = async () => {
  try {
    const apiKey = "b7bfca7b27a3485144fea086c50d09dc";
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


</script>

<style scoped>
.weather-widget {
  max-width: 500px;
  margin: 20px auto;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  margin-top: 100px;
}

.weather-widget:hover {
  transform: translateY(-5px);
}

.widget-title {
  font-size: 36px;
  color: #e6dfdf;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.input-group {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.input-group:focus-within {
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
}

.form-control {
  flex: 1;
  border: none;
  padding: 14px;
  font-size: 16px;
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
  outline: none;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 128, 0, 0.2);
}

.input-group-append {
  background-color: #062095;
  padding: 14px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.input-group-append:hover {
  background-color: #1123ef;
}

.btn-primary {
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
}

.btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.weather-data {
  margin-top: 20px;
}

.location {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.temperature {
  font-size: 48px;
  color: #be1919;
  font-weight: bold;
  margin-top: 10px;
}

.description {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.loader {
  font-size: 16px;
  text-align: center;
  color: #888;
  margin-top: 20px;
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  display: block;
  margin: 0 auto;
}

.additional-info {
  margin-top: 20px;
  text-align: left;
  color:white;
}

.share-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.btn-info {
  background-color: #55acee;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-info:hover {
  background-color: #2795e9;
}

@media (max-width: 600px) {
  .weather-widget {
    padding: 16px;
  }

  .widget-title {
    font-size: 28px;
  }

  .form-control {
    padding: 12px;
  }

  .temperature {
    font-size: 36px;
  }
}
</style>
