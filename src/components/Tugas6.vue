<template>
    <div>
      <h1>Tugas 6</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas6',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://mtaufikkurrahmantgs6.netlify.app/';
        window.open(externalUrl, '_blank');
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  