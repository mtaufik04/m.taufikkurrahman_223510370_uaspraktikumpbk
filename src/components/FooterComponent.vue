<template>
  <q-footer class="footer">
    <q-toolbar class="toolbar">
      <div class="social-links">
        <q-btn flat round dense icon="mdi-github" @click="openLink('https://github.com/mtaufik04')" class="social-btn" />
        <q-btn flat round dense icon="mdi-facebook" @click="openLink('https://www.facebook.com/topikajolah.lah.7?mibextid=ZbWKwL')" class="social-btn" />
        <q-btn flat round dense icon="mdi-instagram" @click="openLink('https://www.instagram.com/mtaufikkurrahmann')" class="social-btn" />
      </div>
    </q-toolbar>
    <div class="footer-info">
      <p class="footer-text1">
        Follow me on social media for more updates and projects!
      </p>
      <p class="footer-text">
        Designed by M. Taufik Kurrahman
      </p>
    </div>
    <div class="footer-decoration">
      <div class="footer-line"></div>
      <p class="footer-signature">Powered by Vue.js and Quasar Framework</p>
    </div>
  </q-footer>
</template>

<script setup>
import { ref } from 'vue';

const openLink = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #1e1e1e;
  color: #ffffff;
  text-align: center;
  padding: 40px 0;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.toolbar {
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 20px;
}

.footer-title {
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-right: -1200px;
}

.social-btn {
  color: #ffffff;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  border-radius: 50%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}

.social-btn:hover {
  transform: translateY(-5px);
  background-color: #ffffff;
  color: #1e1e1e;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.footer-info {
  margin-top: 20px;
}

.footer-text1 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #b0b0b0;
}
.footer-text {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #b0b0b0;
}
.footer-decoration {
  margin-top: 30px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.footer-decoration:hover {
  opacity: 1;
}

.footer-line {
  width: 80%;
  height: 1px;
  background-color: #ffffff;
  margin: 0 auto 10px;
}

.footer-signature {
  font-size: 0.8rem;
  color: #b0b0b0;
}

.q-btn {
  margin: 0 10px;
  color: #ffffff;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  opacity: 0.8;
}

.q-btn:hover {
  transform: translateY(-5px);
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
