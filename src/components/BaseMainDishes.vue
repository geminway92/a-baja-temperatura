<script setup>
import {listSrcAllergens} from '../assets/data/listSrcAllergens';
const props = defineProps({
    mainObject: Object
})
console.log(listSrcAllergens["Daily"].icon)

</script>

<template>
    <div class="container-main" v-for="main in Object.keys(mainObject)" :key="main">
        <h1>{{ $t( main )}}</h1>
        <div
            v-for="dish in Object.values(mainObject[main])" :key="dish" 
            class="list-menu">
            
            <div  v-if="dish.nameDishes" class="dish">
                <h2>{{ dish.nameDishes }}</h2>
                <h3>{{ dish.ingredients }}</h3>
            </div>

            <div class="alergenos" >
                <img v-for="item in dish.allergens" :key="item"  :src="listSrcAllergens[item]?.icon" alt="">
            </div>

            <div  v-for="accompaniment in dish.accompaniments" :key="accompaniment">
                <span class="d-block text-bold text-l pb-1">{{ $t( Object.keys(dish).toString() ) }}</span>
                <p class="font-secundary m-0">{{ accompaniment.name }}</p>
                <div class="alergenos" >
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
@font-face {
    font-family: 'Cormorant Garamond';
    src: 
    url(../assets/fonts/CormorantGaramond-Regular.ttf);
}
@font-face {
    font-family: 'Jost';
    src: url(../assets/fonts/Jost-Italic-VariableFont_wght.ttf);
}

img{
    width: 25px;
}

.container-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: min-content;
    font-family: 'Cormorant Garamond', serif;
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
    font-family: 'Jost', sans-serif;
    color: #626262;
}

@media screen and (min-width: 700px) {
.list menu h3 {
    font-weight: 100;
}

}


</style>