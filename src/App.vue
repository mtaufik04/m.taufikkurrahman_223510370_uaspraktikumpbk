<template>
  <q-layout view="hHh lpR fFf" class="app-background">
    <q-header elevated class="blur-navbar">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="toolbar-title">
          UAS PRAKPBK
        </q-toolbar-title>

        <div class="nav-links">
          <router-link tag="q-item" to="/" v-ripple exact class="nav-item">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </router-link>

          <router-link tag="q-item" to="/weather" v-ripple class="nav-item">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              Weather
            </q-item-section>
          </router-link>

          <router-link tag="q-item" to="/contact" v-ripple class="nav-item">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              Contact me
            </q-item-section>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>
    <DaftarTugas/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import DaftarTugas from './components/DaftarTugas.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.blur-navbar {
  background: rgba(51, 51, 51, 0.3); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.toolbar {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.toolbar-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #e06e3a;
  transition: color 0.3s;
}

.toolbar-title:hover {
  color: #42a5f5;
}

.nav-links {
  display: flex;
}

.nav-item {
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #ffffff;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-bottom 0.3s;
  border-bottom: 3px solid transparent;
  margin-right: 20px;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  transition: left 0.3s ease-in-out;
  z-index: -1;
}

.nav-item:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid #42a5f5;
  background: rgba(255, 255, 255, 0.1);
}

.nav-item:hover::before {
  left: 0;
  background: linear-gradient(120deg, rgba(66, 165, 245, 0.5), rgba(255, 87, 34, 0.5), rgba(66, 165, 245, 0.5));
}

.q-item-section {
  font-size: 1rem;
  color: #ffffff;
  transition: color 0.3s;
}

.nav-item:hover q-item-section {
  color: #42a5f5;
}
</style>