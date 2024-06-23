<template>
    <div class="tugas-tidak-tersedia-container">
      <q-card class="tugas-card">
        <q-card-section class="tugas-card-section">
          <q-avatar class="tugas-avatar" size="120px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar">
          </q-avatar>
          <div class="tugas-content">
            <h1>Yah, Tugas Tidak Ada</h1>
            <p>
              Maaf, Tugas pertemuan 7 tidak ada karena tidak ada pemberitahuan untuk mengerjakan tugas tersebut. Mohon maaf atas ketidaknyamanannya. Terima kasih atas pengertian Anda.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas7'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  
  .tugas-tidak-tersedia-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f5f5f5;
  }
  
  .tugas-card {
    max-width: 600px;
    width: 100%;
    background: #212020;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
  
  .tugas-card-section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .tugas-avatar {
    margin-bottom: 20px;
  }
  
  .tugas-content h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #e06e3a;
    margin-bottom: 10px;
  }
  
  .tugas-content p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #cfcfcf;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .tugas-card {
    animation: fadeIn 1s ease;
  }
  </style>
  