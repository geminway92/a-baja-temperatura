<script setup>
import { ref } from "@vue/reactivity"
import ContactComponent from '../components/ContactComponent.vue';

 
  

</script>

<template>
  <div class="about">
    <img class="logo" src="../assets/logo.jpeg" alt="logo a baja temperatura">
    <contact-component/>
    <h2 class="info-restaurant">Ofrecemos a nuestros clientes una experiencia única, ven a probar las deliciosas... </h2>
  </div>
</template>

<style scoped>

.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 4em;
  color: white;
  text-align: center;
}
.logo{
  border-radius: 50%;
  margin-top: 1em;
  width: 200px;
}

.info-restaurant{
  font-size: 17px;
  padding: 1em;
}


</style>
