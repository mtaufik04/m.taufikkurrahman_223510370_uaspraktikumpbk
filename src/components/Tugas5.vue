<template>
    <div>
      <h1>Tugas 5</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas5',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://mtaufikkurrahman-ladingpage.netlify.app/';
        window.open(externalUrl, '_blank'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  