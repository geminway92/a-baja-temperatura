
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";
import mainData from '../../public/assets/data/mainData.json';




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
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
}

</style>