<template>
    <div>
      <h1>Tugas 4</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas4',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://mtaufiktugas4prakpbk.netlify.app/';
        window.open(externalUrl, '_blank'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  