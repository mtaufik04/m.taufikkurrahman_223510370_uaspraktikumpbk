<template>
    <div>
      <h1>Tugas 3</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas3',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://mtaufik-tugas3.netlify.app/';
        window.open(externalUrl, '_blank'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  