<template>
  <div class="daftar-tugas-container">
    <h1>Daftar Tugas</h1>
    
    <div class="marquee-wrapper">
      <div class="marquee">
        <div class="marquee-border"></div>
        <div v-if="selectedUser === ''" class="marquee-text">
          <span class="marquee-label"></span>
          <span class="marquee-content"></span>
        </div>    
        <div v-else class="marquee-text">
          <span class="marquee-content">PEMBERITAHUAN: Untuk tugas pertemuan ke6 anda harus menjalankan server json terlebih dahulu sebelum melakukan proses crud{{ selectedUserName }}"</span>
        </div>
      </div>
    </div>
    <div class="menu-pilihan">
      <ul>
        <li 
          v-for="(tugas, index) in daftarTugas" 
          :key="index"
          :class="{ 'selected': tugas === tugasTerpilih }"
          @click="pilihTugas(tugas)"
        >
          <a v-if="tugas === 'Tugas pertemuan ke1'" 
            href="https://taufik-portocv.netlify.app/"
            class="external-link"
          >
            {{ tugas }}
          </a>
          <a v-else-if="tugas === 'Tugas pertemuan ke2'"
            href="https://taufiktgsprakpbk2.netlify.app/"
            class="external-link"
          >
            {{ tugas }}
          </a>
          <a v-else-if="tugas === 'Tugas pertemuan ke3'"
            href="https://mtaufik-tugas3.netlify.app/"
           
            class="external-link"
          >
            {{ tugas }}
          </a>
          <a v-else-if="tugas === 'Tugas pertemuan ke4'"
            href="https://mtaufiktugas4prakpbk.netlify.app/"
            class="external-link"
          >
            {{ tugas }}
          </a>
          <a v-else-if="tugas === 'Tugas pertemuan ke5'"
            href="https://mtaufikkurrahman-ladingpage.netlify.app/"
            class="external-link"
          >
            {{ tugas }}
          </a>
          <a v-else-if="tugas === 'Tugas pertemuan ke6'"
            href="https://mtaufikkurrahmantgs6.netlify.app/"
            class="external-link"
          >
            <span class="label-with-animation">{{ tugas }}</span>
          </a>
          <span v-else>
            {{ tugas }}
          </span>
        </li>
      </ul>
    </div>

    <q-dialog
      v-model="dialogTugasTidakAda"
      persistent
      class="dialog-custom"
    >
      <q-card>
        <q-card-section class="q-pt-none">
          <q-card-title>
           Yah, Tugas Tidak Ada
          </q-card-title>
        </q-card-section>

        <q-card-section>
          <q-card-text>
            Tugas pertemuan 7 tidak ada dikarenakan tidak ada pemberitahuan untuk mengerjakan tugas tersebut. Mohon maaf atas ketidaknyamanannya.
          </q-card-text>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Tutup"
            color="primary"
            @click="dialogTugasTidakAda = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const daftarTugas = [
  'Tugas pertemuan ke1',
  'Tugas pertemuan ke2',
  'Tugas pertemuan ke3',
  'Tugas pertemuan ke4',
  'Tugas pertemuan ke5',
  'Tugas pertemuan ke6',
  'Tugas pertemuan ke7',
]; 
const tugasTerpilih = ref(null);
const dialogTugasTidakAda = ref(false);

const pilihTugas = (tugas) => {
  tugasTerpilih.value = tugas;
  if (tugas === 'Tugas pertemuan ke7') {
    dialogTugasTidakAda.value = true;
  }
};
</script>

<style scoped>
.daftar-tugas-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif; 
}

h1 {
  text-align: center;
  font-size: 3rem;
  color: #2196f3; 
  margin-bottom: 20px;
  text-transform: uppercase;
}

.menu-pilihan ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
}

.menu-pilihan li {
  cursor: pointer;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 8px;
  transition: transform 0.2s, background-color 0.3s, color 0.3s;
  background-color: #f0f0f0; 
  color: #333; 
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  text-align: center;
}

.menu-pilihan li:hover {
  transform: translateY(-3px); 
  background-color: #e0e0e0; 
}

.menu-pilihan li.selected {
  background-color: #2196f3; 
  color: #fff; 
  transform: scale(1.05); 
}
.marquee-wrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.marquee {
  display: inline-block;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 1.2em;
  color: #4CAF50;
}

.marquee-border {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  pointer-events: none;
  box-sizing: border-box;
}

.marquee-text {
  display: inline-block;
  animation: marquee 13s linear infinite;
  margin-left:-300px;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(calc(-100% + 20px));
  }
}

.marquee-label {
  font-weight: bold;
}

.marquee-content {
  position: relative;
  display: inline-block;
  margin-left: 10px;
}

.detail-tugas {
  margin-top: 40px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
  text-align: center;
}

.detail-tugas h2 {
  font-size: 2.5rem;
  color: #333; 
}

.detail-tugas p {
  line-height: 1.8;
  color: #666;
  font-size: 1.2rem;
}

.external-link {
  text-decoration: none;
  color: inherit;
}

.dialog-custom {
  max-width: 400px;
  width: 100%;
}

.dialog-custom .q-card {
  background-color: #fff;
}

.dialog-custom .q-card-title {
  color: #2196f3;
  font-size: 1.5rem;
}

.dialog-custom .q-card-text {
  color: #333; 
}
</style>
