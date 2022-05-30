<script setup>
let mainFood = [
  { 
    nameCategory: 'Vinos',
    drinks: [
      {
        name: 'Vino tinto: Áster crianza',
        price: '4€ copa - 15 € botella'
      },
      {
        name: 'Vino tinto: Gran reserva 904',
        price: '12 € copa - 45 € botella'
      },
      {
        name: 'Vino blanco: Mountain Blanc',
        price: '4 € copa - 15€ botella'
      },
      {
        name: 'Vino blanco: Allende',
        price: '6€ copa - 21€ botella'
      },
      {
        name: 'Vino blanco: Martivilli Verdejo',
        price: '3€ copa - 8€ botella'
      },
      {
        name: 'Vino rosado: Merlot',
        price: '5€ copa - 17 € botella'
      },
      {
        name: 'Vino rosado: Sierra Cantabria',
        price: '3 € copa - 11€ botella'
      },
      {
        name: 'Vino espumoso: Masia segle xv',
        price: '6,5 € - 28€ botella'
      },
      {
        name: 'Champagne: Gobillard Blanc de Noirs',
        price: '11€ copa 40€ botella'
      }
    ]
  },
  { 
    nameCategory: 'Bebidas y cervezas',
    drinks: [
      {
        name: 'Café y te',
        price: '1.6€'
      },
      {
        name: 'Capuccino',
        price: '2.5€'
      },
      
      {
        name: 'Zumos',
        price: '1.8€'
      },
      {
        name: 'Refrescos',
        price: '1.8€'
      },
      {
        name: 'Agua',
        price: '1.8€'
      },
      {
        name: 'Agua con gas Perrier',
        price: '3€'
      },
      {
        name: 'Estrella Galicia',
        price: '2€'
      },
      {
        name: 'Caña',
        price: '1.5€'
      },
      {
        name: 'Pinta',
        price: '2€'
      },
      {
        name: 'Estrella Red Vintage',
        price: '3€'
      },
      {
        name: 'Alhambra 1904',
        price: '3€'
      },
      {
        name: 'Heineken normal y 0.0',
        price: '2.5€'
      },{
        name: 'Mahou sin gluten',
        price: '2.5€'
      },
    ]
  },
  
  { 
    nameCategory: 'Ron',
    drinks: [
      {
        name: 'Barcelo',
        price: '7€'
      },
      {
        name: 'Brugal',
        price: '7€'
      },
      {
        name: 'Bacardi',
        price: '7€'
      },
      {
        name: 'Legendario',
        price: '7€'
      },
      {
        name: 'Zacapa 23',
        price: '7.5€'
      }
    ]
  },
  { 
    nameCategory: 'Gin',
    drinks: [
      {
        name: 'Beffeeter',
        price: '7€'
      },
      {
        name: 'Larios 12',
        price: '8€'
      },
        {
        name: 'Larios rose',
        price: '7€'
      },
      {
        name: 'Nordes',
        price: '10€'
      },
      {
        name: 'Seagrams ',
        price: '8€'
      },
    ]
  },
  { 
    nameCategory: 'Vodka',
    drinks: [
      {
        name: 'Absolut',
        price: '7€'
      },
      {
        name: 'Smirnoff',
        price: '7€'
      },
      {
        name: 'Greay Grouse',
        price: '9,€'
      },
      {
        name: 'Belvedere',
        price: '10€'
      },
    ]
  },
  { 
    nameCategory: 'Whisky',
    drinks: [
      {
        name: 'JB',
        price: '7€'
      },
      {
        name: 'Jack Daniels',
        price: '7€'
      },
      {
        name: 'Ballantines',
        price: '7€'
      },
      {
        name: 'JW Black label',
        price: '10€'
      },
      {
        name: 'Jameson',
        price: '8€'
      },
    ]
  },
    { 
    nameCategory: 'Licores/brandy/coñac',
    drinks: [
      {
        name: 'Baileys',
        price: '5€'
      },
      {
        name: 'Amaretto Disaronno',
        price: '5€'
      },
      {
        name: 'Ruavieja licor de hierbas',
        price: '4€'
      },
      {
        name: 'Soberano',
        price: '5€'
      },
      {
        name: 'Terry',
        price: '5€'
      },
      {
        name: 'Licor 43',
        price: '6€'
      },
      {
        name: 'Jagger',
        price: '6€'
      },
      {
        name: 'Limonchelo',
        price: '4€'
      },
      {
        name: 'Martini blanco/rosado/dry',
        price: '6€'
      },
    ]
  },
  { 
    nameCategory: 'Sin alcohol',
    drinks: [
      {
        name: 'Licor fresa, Mora, melocotón sin alcohol',
        price: '4€'
      },
    ]
  },
]
</script>

<template>
    <div class="drinks">
        <div class="container-main">
            <div v-for="drink in mainFood" :key="drink">
                <h1>{{ drink.nameCategory }}</h1>
                <div v-for="drinks in drink.drinks" :key="drinks" class="dish">
                <div style="display:flex;justify-content:space-between">
                    <h2> {{ drinks.name }} </h2>
                    <h3 style="margin-left: 1rem"> {{ drinks.price }}</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.drinks{
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 4em;
  min-height: 100vh;
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