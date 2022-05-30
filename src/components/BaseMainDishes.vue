<script setup>
import {listSrcAllergens} from '../assets/data/listSrcAllergens';

const props = defineProps({
    mainObject: Object,
    titleMain: String
})


</script>


<template>
    <div class="container-main">
        <h1>{{ $t( titleMain )}}</h1>
        <div
            v-for="dish in Object.values(mainObject)" :key="dish" 
            class="list-menu">
            
            <div  v-if="dish.nameDishes" class="dish">
                <h2>{{ dish.nameDishes }}</h2>
                <h3>{{ dish.ingredients }}</h3>
            </div>

            <div class="allergens" >
                <img v-for="item in dish.allergens" :key="item"  :src="listSrcAllergens[item]?.icon" alt="">
            </div>

            <div  v-for="accompaniment in dish.accompaniments" :key="accompaniment">
                <span class="d-block text-bold text-l pb-1">{{ $t( Object.keys(dish).toString() ) }}</span>
                <p class="font-secundary m-0">{{ accompaniment.name }}</p>
                <div class="allergens" >
                    <img v-for="item in accompaniment.allergens" :key="item"  :src="listSrcAllergens[item]?.icon" alt="">
                </div>
            </div>

            <div  v-for="cash in dish.price" :key="cash" >
                <span class="d-block text-bold text-l pb-1" >{{ $t( Object.keys(dish).toString() ) }}</span>
                <p class="font-secundary m-0">{{ cash }}€</p>
            </div>

        </div>
    
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";


img{
    width: 25px;
}

.container-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: 'Cormorant Garamond', serif;
    height: 100%;
}

.list-menu {
    width: 80%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.list-menu h2{
    font-size: 20px;
}
.list-menu h3 {
    font-size: 16px;
    margin: 0;
    font-weight: normal;
    font-family: 'Jost', sans-serif;
    color: #626262;
}
</style>