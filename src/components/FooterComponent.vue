<script setup>


</script>
<template>
    <div class="footer">
        
        <div class="contact">
            <a href="https://www.instagram.com/felixcp41/"  class="contact-description">
                <img src="../assets/svg/instagram.svg" alt="instagram">
            </a>
        </div>
        
        <img class="logo" src="../assets/logo.jpeg" alt="logo a baja temperatura">
        <p>© 2022 A baja temperatura </p>
    </div>
</template>

<style scoped>
a{
    text-decoration: none;
    color: #262323;
    font-weight: bold;
    padding-left: .3em;
}

p{
    margin: .5em;
}

img{
    width: 50px;
}

.footer{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: rgb(195,156,96);
    background: linear-gradient(355deg, rgba(195,156,96,1) 0%, rgba(95,68,39,1) 100%);
    padding: 1em 0;
}

.contact{
    display: flex;
    align-self: flex-start;
    padding-left: 1em;
    gap: .5em;
}

.contact p {
    margin: 0;
}

.contact img{
  width: 30px;
}

</style>