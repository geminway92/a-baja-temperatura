
<script setup>
import { ref } from "@vue/reactivity"

    const widthMap = ref(300)

    const calcWidthScreen = () => {
        widthMap.value = (screen.width > 400 && screen.width < 700 ? 400 :  screen.width > 700 ? 700 : 300)
    }
 
  calcWidthScreen()
    

</script>
<template>
  <div class="container-contact">

    <div class="contact">  
      <p>Síguenos</p>
      <div class="flex">
        <a href="https://www.instagram.com/felixcp41/" class="contact-description">
          <img class="icon-ig" src="../assets/icons-png/Instagram_icon.png" alt="instagram">
        </a>
      </div>
    </div>

    <div class="contact">
      <p>Contáctanos</p>
      
          <div class="flex">
            <img src="../assets/svg/Phone.svg" alt="">
            <a href="tel:+34 629 86 07 86" class="contact-description number">+34 629 86 07 86</a>
          </div>
          <div class="flex">
            <img src="../assets/svg/Email.svg" alt="">
            <a href="mailto:info@abajatemperatura.com" class="contact-description">info@abajatemperatura.com</a>
          </div>
        </div>

        <div class="contact">
          <p>Visítanos</p>
            <div class="flex">
              <img src="../assets/svg/Map.svg" alt="">
              <a href="https://goo.gl/maps/CD11JNeCReKGDngJ7" class="contact-description">Av. Marife de Triana, 14, 29620 Torremolinos, Málaga</a>
            </div>
        </div>
  
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
a{
  text-decoration: none;
}

p {
  margin: 0;
  padding: .5em;
  font-size: 18px;
  font-weight: bold;
}

.container-contact{
  display: flex;
  flex-direction: column;
}

.contact{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
}

.contact-description  {
  width: 200px;
  display: flex;
  justify-content: center;
  color: $text;
  font-weight: bold;
  font-weight: bold;
}

.number{
  width: 120px;
}

.flex{
  display: flex;
}

.contact img{
  padding-right: .9em;
  width: min-content;
  height: 15px;  
  // background: #262323;
  border-radius: 20px;
  padding: .2em;
}

.contact .icon-ig{
  height: 30px;
}
</style>