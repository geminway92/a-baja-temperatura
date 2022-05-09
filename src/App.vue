<script setup >
import { ref } from 'vue';

import NavbarBase from "./components/NavbarBase.vue";
import ListNav from "./components/ListNav.vue";


  let isActiveList = ref(false)
  

  
  const triggerMenu = () => {
    isActiveList.value = !isActiveList.value;

  }


</script>

<template>
  <NavbarBase @triggerMenu="triggerMenu"/>
  <ListNav @triggerMenu="triggerMenu" :isActiveList="isActiveList" />

  <router-view/>
</template>

<style>
html, body{
  margin: 0;
  background-image: url('./assets/682.jpg');
    background-position-x: 7%;
}

button{
  cursor: pointer;
}

nav {
  background: pink;
  padding: 1em;
}
</style>
