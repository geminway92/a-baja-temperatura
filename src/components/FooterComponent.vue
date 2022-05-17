<script setup>
import ContactComponent from './ContactComponent.vue';

</script>
<template>
    <div class="footer">
        <div class="container-items">
            
            <contact-component/>
        </div>
        
        <p>© 2022 A baja temperatura </p>
    </div>
</template>

<style scoped>

img{
    width: 50px;
}

.footer{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* bottom: 0; */
    width: 100%;
    background: #daad68;
    padding: 1em 0;
}

.container-items{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.2em;
}

.contact img{
  padding-right: .9em;
  width: min-content;
  height: 30px;  
  padding: .2em;
}



</style>