<template>
    <div>
      <h1>Tugas 1</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas1',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://taufik-portocv.netlify.app/';
        window.open(externalUrl, '_blank'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  