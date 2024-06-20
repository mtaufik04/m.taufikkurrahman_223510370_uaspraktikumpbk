// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Weather from '../components/WeatherWidget.vue';
import DaftarTugas from '../components/DaftarTugas.vue'; 


const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/weather', component: Weather, name: 'Weather' },
  { path: '/daftartugas', component: DaftarTugas, name: 'DaftarTugas' } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
