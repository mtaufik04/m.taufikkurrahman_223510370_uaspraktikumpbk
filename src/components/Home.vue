<template>
  <q-page class="home-page">
    <!-- Parallax Hero Section -->
    <q-parallax src="../assets/gambar2.jpg" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Hallo, Wellcome To Our Website</h1>
        <p class="hero-subtitle">
         Disini anda bisa melihat tugas yang telah saya kerjakan dari pertemuan 1 hingga 7 kemudian anda juga bisa mengelola kegiatan anda dengan fitur kami yaitu todo-listl,anda juga bisa melihat bagaimana suhu cuaca diberbagai kota dan negara dengan data yang diambil dari openmap dengan menggunakan fitur kami pada bagian weither.
        </p>
        <q-btn color="primary" label="Jelajahi Sekarang" @click="$router.push('/weather')" class="hero-btn" />
      </div>
    </q-parallax>

    <!-- Introduction Section -->
    <div class="introduction-section q-pa-md">
      <q-card flat bordered class="q-pa-md text-center introduction-card">
        <q-card-section>
          <h2 class="introduction-title">Kenapa Menggunakan Website Kami?</h2>
          <p class="introduction-text q-mt-md">
            Website ini dibuat untuk membantu Anda dalam melihat tugas-tugas dan memantau cuaca dengan mudah. Fitur-fitur kami dirancang untuk memberikan informasi yang Anda butuhkan secara cepat dan akurat.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <!-- Features Section -->
    <div class="features-section row justify-center q-mt-xl q-pa-md">
      <q-card class="feature-card q-mr-md" @click="$router.push('/')">
        <q-img src="../assets/gambar3.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Daftar Tugas Saya</div>
          <p>Anda dapat melihat daftar tugas saya selama satu semester di halaman berikut.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Lihat Tugas" color="primary" />
        </q-card-actions>
      </q-card>

      <q-card class="feature-card q-ml-md">
        <q-img src="../assets/gambar4.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Cek Cuaca</div>
          <p>Periksa cuaca di berbagai kota dan negara dengan fitur weather kami.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cek Cuaca" color="primary" @click="$router.push('/weather')" />
        </q-card-actions>
      </q-card>

      <q-card class="feature-card q-ml-md">
        <q-img src="../assets/gambar5.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Todo list</div>
          <p>Anda dapat mengatur kegiatan anda disini dan mulailah untuk menuliskan impian anda disini.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Mulai Menulis" color="primary" @click="$router.push('/tugas3')" />
        </q-card-actions>
      </q-card>

      <q-card class="feature-card q-ml-md">
        <q-img src="../assets/gambar7.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Portofolio</div>
          <p>Anda dapat memeriksa portfolio devoloper disini.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="lihat Portfolio" color="primary" @click="$router.push('/tugas1')" />
        </q-card-actions>
      </q-card>
    </div>
    

  </q-page>
  <FooterComponent />
</template>

<script setup>
import { useRouter } from 'vue-router';
import FooterComponent from './FooterComponent.vue';


const router = useRouter();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&family=Roboto:wght@400;700&display=swap');
.highlight-text {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #2196f3; /* Ubah warna sesuai preferensi */
}

.introduction-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  animation: fadeIn 1.5s ease-in-out;
}

.introduction-text {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: #555; /* Warna teks */
}

.introduction-text .highlight-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #42a5f5; /* Warna teks yang di-highlight */
}

/* Animasi fadeIn untuk introduction */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.home-page {
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  position: relative;
}

.hero {
  height: 1000px; /* Ubah tinggi hero untuk efek yang lebih baik */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  margin-top: -100px;
}
.hero-content {
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero-title {
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: slideInFromLeft 1.5s ease-in-out;
  color: rgb(221, 132, 49);
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.hero-title,
.hero-subtitle {
  animation: fadeInUp 1s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: slideInFromRight 1.5s ease-in-out;
  color: rgb(255, 255, 255);
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.hero-btn {
  font-size: 1.1rem;
  background: linear-gradient(45deg, #42a5f5, #2196f3);
  color: #fff;
  padding: 10px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hero-btn:hover {
  background: linear-gradient(45deg, #2196f3, #42a5f5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Section for Introduction */
.introduction-section {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

.introduction-card {
  max-width: 800px;
}

/* Styles for features section */
.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

.feature-card {
  width: 300px;
  margin: 1rem;
}

.card-img {
  height: 200px;
  object-fit: cover;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
}
</style>
