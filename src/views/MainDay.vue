
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";
import mainData from '../assets/data/mainData.json';




let mainDay = ref(mainData)
console.log(mainDay.value)

</script>

<template>
  <div class="menu-dia">
    <base-main-dishes :mainObject="mainDay" />
  </div>
</template>
<style>
.menu-dia{
  position: relative;
  top: 4em;
  height: 100vh;
}
</style>