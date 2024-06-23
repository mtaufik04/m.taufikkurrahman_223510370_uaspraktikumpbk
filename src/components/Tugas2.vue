<template>
    <div>
      <h1>Tugas 2</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas2',
    mounted() {
      this.goToExternalLink();
    },
    methods: {
      goToExternalLink() {
        const externalUrl = 'https://taufiktgsprakpbk2.netlify.app/';
        window.open(externalUrl, '_blank'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  