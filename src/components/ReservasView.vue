<template>
    <div class="reservasView">
        <form @submit.prevent="validateForm">
            <label for="dateReserva">Elige fecha</label>
            <input v-model="dateSelect" id="dateReserva" type="date"  required @change="getReserveApi">

            <div class="container-toggle-hour" @change="getReserveApi">
                <base-toggle  v-for="hour in sheduleHourArray" :key="hour" :hour="hour" bgColor="#daad68" @click="receiveValue(hour)" @receiveValue="receiveValue" :checkedHour="checkedHour" />
            </div>
            
            <div class="container-toggle-tab">

                <div>
                    <input id="tableInterior" type="radio" name="tableInterior"  value="Interior"  v-model="checkedTable">
                    <label for="tableInterior">Mesa Interior</label>
                </div>
                <div>
                    <input id="tableExterior" type="radio" name="tableExterior"  value="Exterior"  v-model="checkedTable">
                    <label for="tableExterior">Mesa Exterior</label>
                </div>
            </div>

            <div class="available-number">
                <p><span :class="{available: tableAvailableInterior,'not-available': tableAvailableInterior === 0 }">{{tableAvailableInterior}}</span> Disponible Interior</p>
                <p><span :class="{available: tableAvailableExterior,'not-available': tableAvailableExterior === 0  }">{{tableAvailableExterior}}</span> Disponible Exterior</p>
            </div>


            <label for="nameInput">Nombre*:</label>
            <input id="nameInput" type="text" required v-model="clientForm.name">
            
            <label for="phoneInput">Teléfono*:</label>
            <input id="phoneInput" type="tel" pattern="[0-9]{9}" required v-model="clientForm.phone">
            
            <label for="clientInput">Comensales*:</label>
            <input id="clintInput" type="number" min="1" required v-model="clientForm.diners">

            <span class="privacity-container">
                <input type="checkbox" id="privacity-clausula" v-model="checkedPrivacity" required >
                Acepto la Cláusula de privacidad: Con objeto de dar cumplimiento a las obligaciones derivadas del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) le informa que al marcar este check usted da su consentimiento para que sus datos personales quedan incorporados a los ficheros de datos de carácter personal de  para la prestación de servicios por parte de la misma y prospección comercial. El Responsable del mencionado fichero es "A baja temperatura" con email info@abajatemperatura.com a la cual usted podrá remitir un comunicado identificado con la referencia Protección de Datos para el ejercicio de sus derechos de acceso rectificación cancelación olvido limitación portabilidad y oposición.
            </span>
            
            <button type="submit">Reservar</button>
        </form>
        
        

    </div>
</template>

<script setup>
import reserveApi from '../api/reserveApi'
import { computed, ref } from '@vue/runtime-core';
import { useToast } from "vue-toastification";

import BaseToggle from './BaseToggle.vue';

const emit = defineEmits(['modal'])
const toast = useToast();


    let dateSelect =  ref('');
    let clientForm = ref({
        name: '',
        diners: 1,
        phone: '',
    });

    let checkedHour =  ref(null);
    let checkedTable =  ref('Interior');
    let checkedPrivacity =  ref(false);
    let tableAvailableInterior = ref(16)
    let tableAvailableExterior = ref(9);
    let attributeMin = ref('');

    const sheduleHourArray = [
    '12:00',
    '12:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
]

    const paramsModal = {
        position: "top-center",
        timeout: 4000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
    }

    const validateForm = () => {
        const isAvailableTable =  checkTableByDinners()
        const hourIsPass = checkHourIsPass()

        if(!isAvailableTable){
            return emit('modal', 'No hay mesas suficientes, prueba a otra hora', paramsModal, 'error' )
        }

        if(!hourIsPass){
            return 
        }
        if(!checkedHour.value){
            return emit('modal', 'Elige una hora', paramsModal, 'error')
        }

        postReserve( isAvailableTable )
    
    }

        
        const postReserve = async ()  => {

            try{
                const {data} = await reserveApi.post('reserves.json', {dayReserve: dateSelect.value, hourReserve: checkedHour.value, numbTableReserve: isAvailableTable,  zoneReserve: checkedTable.value, clientReserve: clientForm.value } )
                emit('modal', 'Reserva Realizada', paramsModal )
                
                getReserveApi()

                clientForm.value = {
                    name: '',
                    diners: 1,
                    phone: '',
                },
                checkedPrivacity.value = false

            }catch (error){
                emit('modal', error.message, paramsModal, 'error' )
            }
            
        };

        const checkTableByDinners = () => {
            let tableNeed = 1
            
            clientForm.value.diners > 0  && clientForm.value.diners <= 4 ? tableNeed = 1 
                :clientForm.value.diners > 4  && clientForm.value.diners <= 8 ? tableNeed = 2 
                : clientForm.value.diners > 8  && clientForm.value.diners <= 12 ?  tableNeed = 3
                : clientForm.value.diners > 12 && clientForm.value.diners <= 16 ? tableNeed = 4
                : clientForm.value.diners > 16 && clientForm.value.diners <= 20 ? tableNeed = 5
                : tableNeed = 'No Disponible';
            
            if(checkedTable.value === 'Interior'){
            
                if(tableNeed <= tableAvailableInterior.value){
                     return tableNeed;
                }else{
                     return false;
                }
            }else{
                if(tableNeed <= tableAvailableExterior.value){
                     return tableNeed
                }else{
                     return false;
                }
            }
        };

        const checkAvailebleAllZone = async (reservesArray) => {
            const reserveFilterInterior = reservesArray.filter( e => e.dayReserve == dateSelect.value && e.hourReserve == checkedHour.value && e.zoneReserve == 'Interior');
            const reserveFilterExterior = reservesArray.filter( e => e.dayReserve == dateSelect.value && e.hourReserve == checkedHour.value && e.zoneReserve == 'Exterior');
            
            tableAvailableInterior.value = 16 -  reserveFilterInterior.length
            tableAvailableExterior.value = 9 - reserveFilterExterior.length

            console.log('Interior',reserveFilterInterior, 'exterior', reserveFilterExterior)
        };

        

        const dateActual = () => {
            const date = new Date()
            const day = date.getDate()
            const month = (date.getMonth() + 1).toString().padStart(2,0)
            const year = date.getFullYear().toString().padStart(2,0)

            const dateActual = `${year}-${month}-${day}`
            attributeMin.value =  dateActual
            return dateActual;
        }

        const hourActual = () => {
            const dayActual = new Date()
            let hours = dayActual.getHours().toString().padStart(2,0);
            let minutes = dayActual.getMinutes().toString().padStart(2,0);
            
            
            const hoursActual = `${ hours }:${minutes}`
            return hoursActual;
        }

        const getReserveApi = async ( ) => {

            checkHourIsPass()

            const {data} = await reserveApi.get('reserves.json' )
            if(!data){
                return;
            }

            const dataEntries = Object.values(data)            
            checkAvailebleAllZone(dataEntries)
        };

        const checkHourIsPass = () => {
            let dayActual = dateActual()
            let hourMinActual = hourActual()
        
            if(!dateSelect.value){
                dateSelect.value = attributeMin.value
            }
                dateSelect.value = new Date(dateSelect.value).toISOString().substring(0, 10);
                console.log('dia actual', dayActual,'fechaselec', dateSelect.value)
            if( dayActual === dateSelect.value && checkedHour.value < hourMinActual ){
                emit('modal', 'Hora inferior de la actual', paramsModal, 'error'  )
                return false
            }else if(dayActual > dateSelect.value ){
                emit('modal', 'El día es anterior al actual', paramsModal, 'error' )
                checkedHour.value = null
                return false
            }
            return true;
                
        };

        const receiveValue = ( valueInput ) => {
           return checkedHour.value = valueInput
        }

        getReserveApi()

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

label{
    font-size: 1em;
    font-weight: bold;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
}

button{
    padding: 1em;
    background: #dfe2e4;
    color:black;
    margin: 1em;
    font-weight: bold;
    -webkit-appearance: none;
    border-radius: 10px;
}

button:active{
    background: #ffffff;
}

#dateReserva{
    padding: .5em;
    font-size: 1.2em;
    
}
.container-toggle-hour{
    display: flex;
    width: 80%;
    justify-content: center;
    flex-wrap: wrap;
}


input[type="text"], input[type="email"], input[type="number"], input[type="tel"], textarea {
    padding: .5em;
    font-size: 1em;
}
.container-toggle-tab{
    display: flex;
    gap: 1em;
}
.privacity-container{
    width: 80%;
    text-align: justify;
}

textarea {
    resize: none;
    height: 100px;
    font-size: 1.2em;
}

.available-number{
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

}

.available{
    background: $primary;
}
.not-available{
    background: $error;
}
.available-number span{
    padding: .5em;
}
</style>