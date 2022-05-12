<script setup>
import { ref } from "@vue/reactivity";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import ContactComponent from '../components/ContactComponent.vue';
import ReservasView from "../components/ReservasView.vue";


const toast = useToast();

const modal = ( ParamsModal, optionsModal, type ) => {
  
  if(type === 'error'){
    return toast.error(ParamsModal, optionsModal );
  }
    toast.success(ParamsModal, optionsModal );

}  

const widthMap = ref(300)

const calcWidthScreen = () => {
  widthMap.value = (screen.width > 400 && screen.width < 700 ? 400 :  screen.width > 700 ? 700 : 300)
  }
 
  calcWidthScreen()

</script>

<template>
  <div class="about">
    <img class="logo" src="../assets/logo.jpeg" alt="logo a baja temperatura">

    <div class="container-shedule">
      <h1>Horario</h1>
      <p>Martes a Domingo</p>
      <p>12:00 - 16:30 | 20:30 - 00:00</p>
    </div>

    <iframe  
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.6376953097883!2d-4.4916463!3d36.63510670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fbc2dd7414d1%3A0x5cd43e162a1a8ae8!2sAv.%20Marife%20de%20Triana%2C%2014%2C%2029620%20Torremolinos%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1652218001041!5m2!1ses!2ses" 
      :width="widthMap" 
      height="300" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <h2 class="info-restaurant">Ofrecemos a nuestros clientes una experiencia única, ven a probar las deliciosas... </h2>

    <h3>¡Puedes reservar Online!</h3>
    <reservas-view @modal="modal"/>
  </div>
</template>

<style scoped>

.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  height: min-content;
}
.logo{
  border-radius: 50%;
  margin-top: 4.5em;
  width: 200px;
}

.container-shedule p {
  font-weight: bold;
}

.info-restaurant{
  font-size: 17px;
  margin-bottom: 1em;
  padding: 1em;
}


</style>
