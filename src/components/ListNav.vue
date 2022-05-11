<template>
    <nav class="list-nav" :class=" classDinamicList">
        <ul>
            <li @click="goRoute('about')" >Acerca de nosotros</li>
            <li @click="goRoute('menu-carta')">Menú - Carta</li>
            <li @click="goRoute('menu-degustacion')">Menú degustación</li>
            <li @click="goRoute('carta-bebidas')">Carta Bebidas</li>
            <li @click="goRoute('menu-dia')">Menú del día</li>    
        </ul>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
    
const props = defineProps({
    'classDinamicList': String,
    })
const emit = defineEmits(['triggerMenu'])
const router = useRouter()

   
    const goRoute = (rute) => {
        
        emit('triggerMenu')
        router.push({name: rute})
        scrollTo(0, 0)
    }

</script>


<style scoped>

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul li{
    padding: 0.5em;
    cursor: pointer;
    margin: 0;
}

li:hover{
    background: #3a3a3a;
    color: #f2f2f2;
}

.list-nav{
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    background: #daad68;
    font-weight: bold;
    width: 100%;
    transition: all 1s;
    padding: 0;
    z-index: 1;
    left: -100%;
    top: 60px;
}

.active {
    animation: activeMenu 1s forwards; 
}

.none{
    animation: noneMenu 3.8s forwards;
}

@keyframes activeMenu {
    from{
        left: -100%;
    }

    to{
        left: 0%;
        top: 60px;
    }
    
}

@keyframes noneMenu {
    from{
        top: 60px;
        left: 0%;
    }

    to{
        top: -100%;
        left: 0%
    }
}

</style>