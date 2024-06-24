<template>
  <div>
    <h1>Tugas 6</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExternalLink = () => {
  const externalUrl = 'https://mtaufikkurrahmantgs6.netlify.app/';
  window.open(externalUrl, '_blank');
  router.push('/');
};

onMounted(() => {
  goToExternalLink();
});
</script>

<style scoped>
</style>
