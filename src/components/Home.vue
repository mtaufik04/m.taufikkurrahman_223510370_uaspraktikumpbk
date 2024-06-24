<template>
  <video src="../assets/vidio.mp4" class="hero" autoplay loop muted>
  </video>
  <div class="hero-content">
    <h1 class="hero-title">Hallo, Welcome To My Website</h1>
    <p class="hero-subtitle">
      Disini anda bisa melihat tugas yang telah saya kerjakan dari pertemuan 1 hingga 7 kemudian anda juga bisa mengelola kegiatan anda dengan fitur kami yaitu todo-list, anda juga bisa melihat bagaimana suhu cuaca diberbagai kota dan negara dengan data yang diambil dari openmap dengan menggunakan fitur kami pada bagian weather.
    </p>
    <q-btn color="primary" label="lihat selengkapnya" @click="scrollToIntroductionSection" class="hero-btn" />
  </div>
  <q-page class="home-page">
    <div ref="introductionSectionRef" class="introduction-section q-pa-md">
      <q-card flat bordered class="q-pa-md text-center introduction-card">
        <q-card-section>
          <h2 class="introduction-title">Kenapa Menggunakan Website ini?</h2>
          <p class="introduction-text q-mt-md">
            Website ini dibuat untuk membantu Anda dalam melihat tugas-tugas dan memantau cuaca dengan mudah. Fitur-fitur kami dirancang untuk memberikan informasi yang Anda butuhkan secara cepat dan akurat.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <div class="features-section row justify-center q-mt-xl q-pa-md">
      <q-card class="feature-card q-mr-md" @click="$router.push('/daftartugas')">
        <q-img src="../assets/gambar3.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Daftar Tugas Saya</div>
          <p>Anda dapat melihat daftar tugas saya di halaman berikut,sekedar informasi bahwa tugas ke6 harus dijalankan server json terlebih dahulu untuk melakukan inputan dan crud.</p>
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
        <q-card-actions class="tombol1">
          <q-btn flat label="Cek Cuaca" color="primary" @click="$router.push('/weather')" />
        </q-card-actions>
      </q-card>

      <q-card class="feature-card q-ml-md">
        <q-img src="../assets/gambar5.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Todo List</div>
          <p>Anda dapat mengatur kegiatan anda disini dan mulailah untuk menuliskan impian anda disini.</p>
        </q-card-section>
        <q-card-actions class="tombol">
          <q-btn flat label="Mulai Menulis" color="primary" @click="$router.push('/tugas3')" />
        </q-card-actions>
      </q-card>

      <q-card class="feature-card q-ml-md">
        <q-img src="../assets/gambar7.jpg" class="card-img" />
        <q-card-section>
          <div class="feature-title">Portofolio</div>
          <p>Anda dapat memeriksa portfolio developer disini.</p>
        </q-card-section>
        <q-card-actions class="tombol3">
          <q-btn flat label="Lihat Portfolio" color="primary" @click="$router.push('/tugas1')" />
        </q-card-actions>
      </q-card>
    </div>

    <DaftarTugas ref="daftarTugasRef" />
  </q-page>
  <FooterComponent />
</template>

<script setup>
import { ref, unref } from 'vue';
import { useRouter } from 'vue-router';
import FooterComponent from './FooterComponent.vue';
import DaftarTugas from './DaftarTugas.vue';

const introductionSectionRef = ref(null);

const scrollToIntroductionSection = () => {
  const element = unref(introductionSectionRef);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const router = useRouter();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&family=Roboto:wght@400;700&display=swap');

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.home-page {
  background: linear-gradient(135deg, #2e2e2e, #1c1c1c);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  position: relative;
}

.hero {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: -100px;
  object-fit: cover;
  z-index: 1;
}

.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  animation: fadeIn 1.5s ease-in-out;
  z-index: 3;
}

.hero-title {
  font-family: 'Raleway', sans-serif;
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: slideInFromLeft 1.5s ease-in-out;
  color: #dd8431;
  margin-top:-400px;
}

.hero-subtitle {
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: slideInFromRight 1.5s ease-in-out;
  color: #ffffff;
}

.hero-btn {
  font-size: 1.2rem;
  background: linear-gradient(45deg, #42a5f5, #2196f3);
  color: #fff;
  padding: 12px 36px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  animation: pulse 2s infinite;
}

.hero-btn:hover {
  background: linear-gradient(45deg, #2196f3, #42a5f5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.introduction-section {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  box-shadow: 5px 5px 50px 5px rgb(212, 3, 35);
  margin-top: 40px;
}

.introduction-card {
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
}

.introduction-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  animation: fadeIn 1.5s ease-in-out;
  color: #42a5f5;
}

.introduction-text {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8;
  color: #eee;
}

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

.feature-card {
  width: 300px;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 5px 5px rgb(6, 17, 171);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.card-img {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.feature-card:hover .card-img {
  transform: scale(1.1);
}

.feature-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
  color: #42a5f5;
}

.tombol {
  margin-left: 150px;
  margin-top: 40px;
}

.tombol1 {
  margin-left: 170px;
  margin-top: 60px;
}

.tombol3 {
  margin-left: 150px;
  margin-top: 60px;
}
</style>