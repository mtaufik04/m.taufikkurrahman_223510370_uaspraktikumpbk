<template>
    <div class="tugas7-container">
      <q-card class="tugas7-card">
        <q-card-section>
          <q-card-title>
          </q-card-title>
        </q-card-section>
  
        <q-card-section>
          <q-card-text>
            Maaf, Tugas pertemuan 7 tidak ada karena tidak ada pemberitahuan untuk mengerjakan tugas tersebut. Mohon maaf atas ketidaknyamanannya. Terima kasih atas pengertian Anda.<br>
          </q-card-text>
        </q-card-section>
  
        <q-card-section>
          <q-btn label="Kembali ke Halaman Awal " color="primary" @click="redirectToHome" />
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const redirectToHome = () => {
    router.push({ name: 'Home' });
  };
  </script>
  
  <style scoped>
  .tugas7-container {
    margin-top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    color:black;
  }
  
  .tugas7-card {
    max-width: 500px;
    width: 100%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
  }
  
  .q-card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #0d47a1;
  }
  
  .q-card-text {
    font-size: 1.2rem;
    color: #424242;
    margin: 20px 0;
  }
  
  .q-btn {
    margin-top: 20px;
  }
  </style>
  