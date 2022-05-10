<script setup >
import { ref } from 'vue';

import NavbarBase from "./components/NavbarBase.vue";
import ListNav from "./components/ListNav.vue";


  let classDinamicList = ref('')
  let isActiveList = ref('none')  

  
  const triggerMenu = () => {
  
    // if(classDinamicList.value === ''){
    //   classDinamicList.value = 'active'
    // } else if( classDinamicList.value === 'active'){
    //   classDinamicList.value = 'none'
    // } else if ( classDinamicList.value === 'none'){
    //   classDinamicList.value = 'active'
    // }

    ( classDinamicList.value === '' ? classDinamicList.value = 'active'
      : classDinamicList.value === 'active' ? classDinamicList.value = 'none'
      : classDinamicList.value === 'none' ? classDinamicList.value = 'active'
      : '')
  }


</script>

<template>
  <NavbarBase @triggerMenu="triggerMenu"/>
  <ListNav @triggerMenu="triggerMenu" :classDinamicList="classDinamicList" />

  <router-view/>
</template>

<style>
html, body{
  margin: 0;
  background-image: url('./assets/682.jpg');
  background-position-x: 7%;
  height: 100vh;
}

button{
  cursor: pointer;
}

nav {
  background: pink;
  padding: 1em;
}
</style>
