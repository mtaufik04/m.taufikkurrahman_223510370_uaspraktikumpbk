<template>
  <div>
    <h1>Tugas 4</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExternalLink = () => {
  const externalUrl = 'https://mtaufiktugas4prakpbk.netlify.app/';
  window.open(externalUrl, '_blank');
  router.push('/');
};

onMounted(() => {
  goToExternalLink();
});
</script>

<style scoped>
</style>
