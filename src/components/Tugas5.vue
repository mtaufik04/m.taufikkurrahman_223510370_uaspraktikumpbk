<template>
  <div>
    <h1>Tugas 5</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExternalLink = () => {
  const externalUrl = 'https://mtaufikkurrahman-ladingpage.netlify.app/';
  window.open(externalUrl, '_blank');
  router.push('/');
};

onMounted(() => {
  goToExternalLink();
});
</script>

<style scoped>
</style>
