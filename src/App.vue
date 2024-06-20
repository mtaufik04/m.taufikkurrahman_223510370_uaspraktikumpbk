<template>
  <q-layout view="hHh lpR fFf" class="app-background">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-toolbar-title class="toolbar-title">
          M.TAUFIK KURRAHMAN
        </q-toolbar-title>

        <router-link tag="q-item" to="/" v-ripple exact class="nav-item">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </router-link>

        <router-link tag="q-item" to="/weather" v-ripple class="nav-item">
          <q-item-section avatar>
            <q-icon name="cloud" />
          </q-item-section>
          <q-item-section>
            Weather
          </q-item-section>
        </router-link>

        <router-link tag="q-item" to="/daftartugas" v-ripple class="nav-item">
          <q-item-section avatar>
            <q-icon name="task" />
          </q-item-section>
          <q-item-section>
            Daftar Tugas
          </q-item-section>
        </router-link>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import { useRoute, useRouter } from 'vue-router';
</script>

<style scoped>
.app-background {
  background-image: url('./assets/gambar1.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
}

.toolbar {
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: absolute;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-end; 
}

.toolbar-title {
  font-family: 'Forte', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: #e06e3a;
}

.toolbar-title:hover {
  color: #2196f3;
}

.nav-item {
  padding: 10px 20px;
  font-size: 1.2rem;
  transition: background-color 0.3s;
  border-left: 4px solid transparent;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-left-color: #2196f3;
}

.q-item-section {
  font-size: 1rem;
  color: #ffffff;
}
</style>
