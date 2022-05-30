
<script setup>
import { ref } from "@vue/reactivity";
import BaseMainDishes from "../components/BaseMainDishes.vue";
import mainData from '../../public/assets/data/mainData.json';
import {listSrcAllergens} from '../assets/data/listSrcAllergens';


let mainFood = [
  { 
    nameCategory: 'Entrantes Fríos',
    dishes: [
      {
        name: 'Paté de ave y res a la naranja',
        price: 7.5,
        allergens: ['Gluten', 'Daily','Sulfites']
      },
      {
        name: 'Gazpacho de frambuesa',
        price: 6,
        allergens: ['Gluten', 'Daily']
      },
      {
        name: 'Huevo frito al parmesano',
        price: 8,
        allergens: ['Egg', 'Daily']
      },
      {
        name: 'Chips de verduras',
        price: 5,
        allergens: []
      },
      {
        name: 'Pastel de morcilla',
        price: 5,
        allergens: ['Gluten', 'Egg', 'Daily', 'Nut']
      },
    ]
  },
  { 
    nameCategory: 'Entrantes calientes',
    dishes: [
      {
        name: 'Risotto de setas, solomillo y parmesano',
        price: 13,
        allergens: ['Daily', 'Sulfites']
      },
      {
        name: 'Crema de boniato asado',
        price: 10.50,
        allergens: ['Daily', 'Gluten']
      },
      {
        name: 'Langos',
        price: 6,
        allergens: ['Daily', 'Gluten']
      },
      {
        name: 'Canelón de puerro',
        price: 12,
        allergens: ['Nut', 'Daily', 'Sulfites']
      },
      {
        name: 'Ratatouille con huevo poché y cebolla caramelizada tostada',
        price: 5.5,
        allergens: ['Egg']
      },
      {
        name: 'Croquetas de gambas al ajillo',
        price: 8,
        allergens: ['Gluten', 'Egg', 'Crustaceans', 'Daily']
      }
    ]
  },
  { 
    nameCategory: 'Pescados',
    dishes: [
      {
        name: 'Rodaballo sobre tomate cassé y reducción de oporto',
        price: 12,
        allergens: ['Fish', 'Sulfites']
      },
      {
        name: 'Vieira con puerro y su espuma',
        price: 11,
        allergens: ['Egg', 'Daily', 'Mollusks']
      },
      {
        name: 'Salmón ahumado a baja temperatura',
        price: 20,
        allergens: ['Fish']
      },
      {
        name: 'Bogavante con salsa bearnesa y mirepoix de verduras',
        price: 19,
        allergens: ['Crustaceans', 'Egg', 'Daily']
      }
    ]
  },
  { 
    nameCategory: 'Carnes',
    dishes: [
      {
        name: 'Costillar de cordero a la miel de romero con frutos picantes',
        price: 20,
        allergens: ['Nut', 'Sulfites']
      },
      {
        name: 'Solomillo de cerdo a baja temperatura',
        price: 9,
        allergens: ['Sulfites']
      },
      {
        name: 'Brick de rabo de toro con cremoso de patata trufada',
        price: 14.50,
        allergens: ['Gluten', 'Egg','Daily','Sulfites']
      },
      {
        name: 'Carrillera ibérica con puré de patata asada y fresas salteadas',
        price: 17,
        allergens: ['Daily','Sulfites']
      },
    ]
  },
  { 
    nameCategory: 'Postres',
    dishes: [
      {
        name: 'Tarta de queso a baja temperatura',
        price: 6,
        allergens: ['Gluten', 'Daily', 'Egg']
      },
      {
        name: 'Tiramisú de Bayleis',
        price: 8,
        allergens: ['Gluten', 'Egg', 'Daily', 'Nut', 'Sulfites']
      },
      {
        name: 'Brownie esponjoso',
        price: 8,
        allergens: ['Egg', 'Daily', 'Nut']
      },
      {
        name: 'Mousse de mango',
        price: 8,
        allergens: ['Gluten', 'Daily']
      }
    ]
  }
]

</script>

<template>
  <div class="main">
    <div class="container-main">
      <div v-for="dish in mainFood" :key="dish">
        <h1>{{ dish.nameCategory }}</h1>
        <div v-for="nameDish in dish.dishes" :key="nameDish" class="dish">
          <div style="display:flex;justify-content:space-between">
            <h2> {{ nameDish.name }} </h2>
            <h3 style="margin-left: 1rem"> {{ nameDish.price }}€ </h3>
          </div>

          <div class="allergens" style="display: flex;">
              <img v-for="allergen in nameDish.allergens" :key="allergen" :src="listSrcAllergens[allergen]?.icon" :alt="allergen" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.main{
  position: relative;
  margin-top: 4em;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

img{
    width: 25px;
}

.container-main{
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    height: 100%;
    padding: 1rem 5rem;
}

.allergens img{
  margin-left: 0.5rem;
}
</style>