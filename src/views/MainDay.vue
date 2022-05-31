
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";
import mainData from '../../public/assets/data/mainData.json';




let mainDay = ref(mainData)

</script>

<template>
  <div class="menu-dia">
    <base-main-dishes :mainObject="mainData['menuOfTheDay']" titleMain="menuOfTheDay" />
    <div class="background-url"></div>
  </div>
</template>
<style>
.menu-dia{
  position: relative;
  margin-top: 2em;
  display: flex;
  place-content: center;
  padding: 1em;
  height: min-content;
}

.background-url{
  background-image: url('../assets/brown-wooden-flooring.jpg');
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 15%;
}

@media screen and (min-width: 700px) {
  .menu-dia{
    align-items: center;
    height: 100vh;
  }
}

</style>