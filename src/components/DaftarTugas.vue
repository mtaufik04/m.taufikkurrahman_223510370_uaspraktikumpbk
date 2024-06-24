<template>
  <div class="daftar-tugas-container show">
    <ul class="daftar-tugas-list">
      <li
        v-for="(tugas, index) in daftarTugas"
        :key="index"
        :class="{ 'selected': tugas === tugasTerpilih }"
        @click="pilihTugas(tugas)"
      >
        <router-link :to="tugasLinks[tugas]" class="daftar-tugas-item">
          <q-icon name="assignment" class="tugas-icon" />
          {{ tugas }}
        </router-link>
      </li>
    </ul>

    <q-dialog v-model="dialogTugasTidakAda" persistent class="dialog-custom">
      <q-card>
        <q-card-section class="q-pt-none">
          <q-card-title>
            Yah, Tugas Tidak Ada
          </q-card-title>
        </q-card-section>

        <q-card-section>
          <q-card-text>
            Maaf, Tugas pertemuan 7 tidak ada karena tidak ada pemberitahuan untuk mengerjakan tugas tersebut. Mohon maaf atas ketidaknyamanannya. Terima kasih atas pengertian Anda.<br>
          </q-card-text>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Tutup" color="primary" @click="dialogTugasTidakAda = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const daftarTugas = [
  'Tugas 1',
  'Tugas 2',
  'Tugas 3',
  'Tugas 4',
  'Tugas 5',
  'Tugas 6',
  'Tugas 7',
];

const tugasLinks = {
  'Tugas 1': '/tugas1',
  'Tugas 2': '/tugas2',
  'Tugas 3': '/tugas3',
  'Tugas 4': '/tugas4',
  'Tugas 5': '/tugas5',
  'Tugas 6': '/tugas6',

};

const showDaftarTugas = ref(false);
const dialogTugasTidakAda = ref(false);
const tugasTerpilih = ref(null);

const pilihTugas = (tugas) => {
  tugasTerpilih.value = tugas;
  if (!tugasLinks[tugas]) {
    dialogTugasTidakAda.value = true;
  }
};

onMounted(() => {
  const scrollDown = () => {
    const daftarTugasContainer = document.querySelector('.daftar-tugas-container');
    if (daftarTugasContainer) {
      daftarTugasContainer.scrollTop = daftarTugasContainer.scrollHeight;
    }
  };
});
</script>

<style scoped>
.daftar-tugas-container {
  position: fixed;
  top: calc(100% + 10px); 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  width: 100%; 
  max-height: 400px;
  overflow-y: auto;
  margin-top: -666px;
}

.daftar-tugas-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.daftar-tugas-item {
  padding: 10px 15px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #090f67;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  margin: 5px;
  border-radius: 4px;
}

.daftar-tugas-item:hover {
  background-color: #42a5f5;
}

.selected {
  background-color: #42a5f5;
}

.tugas-icon {
  margin-right: 10px;
}

.q-dialog {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.q-card-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.q-card-text {
  font-size: 1rem;
}
</style>
