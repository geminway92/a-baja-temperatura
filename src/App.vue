<script setup >
import { ref } from 'vue';

import NavbarBase from "./components/NavbarBase.vue";
import ListNav from "./components/ListNav.vue";
import FooterComponent from './components/FooterComponent.vue';


  let classDinamicList = ref('')
  let isActiveList = ref('none')  

  
  const triggerMenu = () => {
  
    ( classDinamicList.value === '' ? classDinamicList.value = 'active'
      : classDinamicList.value === 'active' ? classDinamicList.value = 'none'
      : classDinamicList.value === 'none' ? classDinamicList.value = 'active'
      : '')
  }


</script>

<template>
  <div class="container">  
      <NavbarBase @triggerMenu="triggerMenu"/>
      <ListNav @triggerMenu="triggerMenu" :classDinamicList="classDinamicList" />
      <router-view/>
  </div>
    <footer-component/>

</template>

<style lang="scss">
@import "./assets/scss/variables.scss";

.container{
  position: relative;
  min-height: 100vh;
}

body{
  margin: 0;
  color: $text;
  background: $backgroundColor;
}

button{
  cursor: pointer;
}

nav {
  padding: 1em;
}

</style>
