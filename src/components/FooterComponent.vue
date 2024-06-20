<template>
    <q-footer class="footer">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="footer-title">
        </q-toolbar-title>
        <div class="social-links">
          <q-btn flat round dense icon="mdi-github" @click="openLink('https://github.com/mtaufik04')" />
          <q-btn flat round dense icon="mdi-facebook" @click="openLink('https://www.facebook.com/topikajolah.lah.7?mibextid=ZbWKwL')" />
          <q-btn flat round dense icon="mdi-instagram" @click="openLink('https://www.instagram.com/mtaufikkurrahmann')" />
        </div>
      </q-toolbar>
      <div class="footer-info">
        <p class="footer-text">
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
  .footer {
    background-color: transparent; 
    color: #ffffff;
    text-align: center;
    padding: 20px 0;
    position: static;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  
  .toolbar {
    justify-content: center;
  }
  
  .footer-title {
    font-size: 1rem;
    color: #ffffff;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .footer-info {
    margin-top: 20px;
  }
  
  .footer-text {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  
  .footer-decoration {
    margin-top: 20px;
    opacity: 0.8;
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
    color: #ffffff;
  }
  
  .q-btn {
    margin: 0 10px;
    color: #ffffff;
    transition: transform 0.2s, opacity 0.2s; 
    opacity: 0.8;
  }
  
  .q-btn:hover {
    transform: scale(1.1); 
    opacity: 1; 
  }
  </style>
  