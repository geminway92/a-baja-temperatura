
<script setup>
import { ref } from "@vue/reactivity"

    const widthMap = ref(300)

    const calcWidthScreen = () => {
        widthMap.value = (screen.width > 400 && screen.width < 700 ? 500 :  screen.width > 700 ? 700 : 300)
    }
 
  calcWidthScreen()
    

</script>
<template>
    <div class="container-shedule">
      <h1>Horario</h1>
      <p>Martes a Domingo</p>
      <p>12:00 - 16:30 | 20:30 - 00:00</p>
    </div>
    <div class="container-contact">
      <iframe  
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.6376953097883!2d-4.4916463!3d36.63510670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fbc2dd7414d1%3A0x5cd43e162a1a8ae8!2sAv.%20Marife%20de%20Triana%2C%2014%2C%2029620%20Torremolinos%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1652218001041!5m2!1ses!2ses" 
        :width="widthMap" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    <div class="contact">
      <div class="contact-direction">
        <img src="../assets/svg/Phone.svg" alt="">
        <p>LLÁMANOS</p>
      </div>
          <p class="contact-description">+34 629 86 07 86</p>
        </div>
        <div class="contact">
            <div class="contact-direction">
              <img src="../assets/svg/Map.svg" alt="">

              <span>VISÍTANOS</span>
              </div>
            <p class="contact-description">Av. Marife de Triana, 14, 29620 Torremolinos, Málaga</p>
        </div>
        <div class="contact">
          <div class="contact-direction">
            <img src="../assets/svg/Email.svg" alt="">
            <span>ESCRÍBENOS</span>
          </div>
            <p class="contact-description">abajatemperatura@info.com</p>
        </div>
        <div class="contact">
          <div class="contact-direction">
            <img src="../assets/svg/instagram.svg" alt="">
            <span>SÍGUENOS</span>
          </div>
            <p class="contact-description">@abajatemperatura</p>
        </div>
</template>

<style scoped>
p{
  margin: 0;
}

.container-shedule p {
  font-weight: bold;
}

.contact{
  width: 200px;
}

.contact-description  {
  color: #8c5c46;
  font-weight: bold;
  border: 2px solid black;
  background: whitesmoke;
  width: 200px;
  margin-bottom: 1em;
}

.contact-direction{
  display: flex;
  align-items: center;
  padding: .5em;
  gap: .5em;
  margin: 0;
}

.contact img{
  padding-right: .9em;
  width: min-content;
  height: 25px;  
  background: #262323;
  border-radius: 20px;
  padding: .3em;
}
</style>