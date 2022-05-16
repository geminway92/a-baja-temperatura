
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";

let menuDay = ref({
  nameMenu: 'Menú del día',
  dishes: [
    { nameDishes: 'Parrillada de verduras con queso de Ronda y virutas de ibérico', 
      ingredients: 'Berenjena, Calabacín, Tomate, Pimiento rojo y verde, Espárrago verde, Queso Ronda, Nata, Queso untar, Sal, Pimienta blanca'
    },
    { nameDishes: 'Ajo blanco con tartar de gambas marinadas en cebollino y menta', 
      ingredients: 'Ajo, AOVE, Gambas, Cebollino, Menta'
    },
    { nameDishes: 'Tronco de bacalao con muselina de pimientos y espaguetis de calabacín', 
      ingredients: 'Berenjena, Calabacín, Tomate, Pimiento rojo y verde, Espárrago verde, Queso Ronda, Nata, Queso untar, Sal, Pimienta blanca'
    },
    
    
  ] 
})
</script>

<template>
  <div class="menu-dia">
    <base-main-dishes :menuObject="menuDay" />
  </div>
</template>
<style>
.menu-dia{
  position: relative;
  top: 4em;
  height: 100vh;
}
</style>