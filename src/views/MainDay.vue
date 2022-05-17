
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";
import mainData from '../../public/assets/data/mainData.json';




let mainDay = ref(mainData)

</script>

<template>
  <div class="menu-dia">
    <base-main-dishes :mainObject="mainDay" />
  </div>
</template>
<style>
.menu-dia{
  position: relative;
  margin-top: 4em;
  display: flex;
  place-content: center;
  padding: 1em;
  height: min-content;
}

@media screen and (min-width: 700px) {
  .menu-dia{
    align-items: center;
    height: 100vh;
  }
}

</style>