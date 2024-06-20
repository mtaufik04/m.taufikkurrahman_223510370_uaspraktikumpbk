<template>
  <div class="welcome-container">
    <div class="welcome-text">
      <h2>Selamat Datang di Aplikasi Kami</h2>
      <p>
        Website ini dibuat untuk menyelesaikan tugas akhir praktikum pemograman berbasis komponen <strong>di sini Anda dapat mencari suhu panas di berbagai kota dan negara</strong> dengan menggunakan fitur kami, yaitu weather. <strong>Di sini juga Anda bisa melihat tugas saya dari pertemuan 1 hingga 7</strong>, yang terhubung <strong>melalui</strong> URL Netlify dari masing-masing tugasnya. Anda bisa mengakses fitur daftar tugas untuk melihat tugas-tugas yang telah saya kerjakan.
        <br><br>
        Enjoy Your Time on My Website!
      </p>
    </div>
    <div class="features-container">
      <div class="feature-card" @click="navigateTo('/weather')">
        <span class="feature-icon">
          <i class="fas fa-sun"></i>
        </span>
        <h3>Weather Check</h3>
        <p>Cek suhu panas di kota favorit Anda.</p>
      </div>
      <div class="feature-card" @click="navigateTo('/daftartugas')">
        <span class="feature-icon">
          <i class="fas fa-tasks"></i>
        </span>
        <h3>List of Tasks</h3>
        <p>Daftar tugas dari pertemuan 1 hingga 7.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.welcome-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.welcome-text {
  margin-bottom: 40px;
  max-width: 800px;
}

.welcome-text h2 {
  font-size: 42px;
  font-weight: 600;
  background: linear-gradient(to right, #76531c, #ec9c09);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.welcome-text p {
  font-size: 18px;
  line-height: 1.8;
}

.features-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-top: -30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  color: #30cfd0;
}

.feature-card h3 {
  font-size: 24px;
  margin: 10px 0;
}

.feature-card p {
  font-size: 16px;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .welcome-text h2 {
    font-size: 32px;
  }

  .welcome-text p {
    font-size: 16px;
  }

  .features-container {
    flex-direction: column;
    align-items: center;
  }

  .feature-card {
    width: 90%;
    margin: 10px auto;
  }
}
</style>
