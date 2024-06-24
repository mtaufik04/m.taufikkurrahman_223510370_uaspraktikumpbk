import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Weather from '../components/WeatherWidget.vue';
import DaftarTugas from '../components/DaftarTugas.vue'; 
import Contact from '../components/Contact.vue';
import Tugas1 from '../components/Tugas1.vue';
import Tugas2 from '../components/Tugas2.vue';
import Tugas3 from '../components/Tugas3.vue';
import Tugas4 from '../components/Tugas4.vue';
import Tugas5 from '../components/Tugas5.vue';
import Tugas6 from '../components/Tugas6.vue';
import Tugas7 from '../components/Tugas7.vue';



const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/weather', component: Weather, name: 'Weather' },
  { path: '/daftartugas', component: DaftarTugas, name: 'DaftarTugas' },
  { path: '/contact', component: Contact, name: 'ContactMe' },
  { path: '/tugas1', component: Tugas1, name: 'Tugas1', props: { link: 'https://taufik-portocv.netlify.app/' } },
  { path: '/tugas2', component: Tugas2, name: 'Tugas2', props: { link: 'https://taufiktgsprakpbk2.netlify.app/' } },
  { path: '/tugas3', component: Tugas3, name: 'Tugas3', props: { link: 'https://mtaufik-tugas3.netlify.app/' } },
  { path: '/tugas4', component: Tugas4, name: 'Tugas4', props: { link: 'https://mtaufiktugas4prakpbk.netlify.app/' } },
  { path: '/tugas5', component: Tugas5, name: 'Tugas5', props: { link: 'https://mtaufikkurrahman-ladingpage.netlify.app/' } },
  { path: '/tugas6', component: Tugas6, name: 'Tugas6', props: { link: 'https://mtaufikkurrahmantgs6.netlify.app/' } },
  { path: '/tugas7', component: Tugas7, name: 'Tugas7' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
