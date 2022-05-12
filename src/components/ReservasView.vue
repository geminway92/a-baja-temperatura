<template>
    <div class="reservasView">
        <form @submit.prevent="onEventClick">
            <label for="dateReserva">Elige fecha</label>
            <input v-model="dateSelect" id="dateReserva" type="date" :min="attributeMin" required @change="getReserveApi">

            <div class="container-toggle-hour" @change="getReserveApi">
                <base-toggle  v-for="hour in sheduleHourArray" :key="hour" :hour="hour" bgColor="#daad68" :checkedHour="checkedHour" />
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
import { ref } from '@vue/runtime-core';
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
        timeout: 5000,
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

        const onEventClick = async ()  => {
           const isAvailableTable =  checkTableByDinners()
           
               console.log(checkedHour.value, 'modifica')
           if(isAvailableTable){
               try{
                    await reserveApi.post('reserves.json', {dayReserve: dateSelect.value, hourReserve: checkedHour.value, zoneReserve: checkedTable, clientReserve: clientForm.value } )
    
                    emit('modal', 'Reserva Realizada', paramsModal )

                    getReserveApi()

                    clientForm.value = {
                        name: '',
                        diners: 1,
                        phone: '',
                    },
                    checkedPrivacity = false

                }catch (error){
                 emit('modal', error.message, paramsModal, 'error' )
                }
            }else{
                 emit('modal', 'No hay mesas suficientes, prueba a otra hora', paramsModal, 'error' )
            }
            
        };

        const getReserveApi = async ( ) => {

            console.log('check', checkedHour.value,)
            checkHourIsPass()
                
            const {data} = await reserveApi.get('reserves.json' )
            if(!data){
                console.log(data, 'data es null')
                return;
            }
                console.log(data)
            const dataEntries = Object.values(data)
            
            checkAvailebleAllZone(dataEntries)
        };

        const checkTableByDinners = () => {
            let tableNeed = 1
            
            clientForm.value.diners > 0  && clientForm.value.diners <= 4 ? tableNeed = 1 
                :clientForm.value.diners > 4  && clientForm.value.diners <= 8 ? tableNeed = 2 
                : clientForm.value.diners > 8  && clientForm.value.diners <= 12 ?  tableNeed = 3
                : clientForm.value.diners > 12 && clientForm.value.diners <= 16 ? tableNeed = 4
                : clientForm.value.diners > 16 && clientForm.value.diners <= 20 ? tableNeed = 5
                : tableNeed = 'No Disponible'
            console.table(clientForm.value)
            
            if(checkedTable === 'Interior'){
            
                if(tableNeed <= tableAvailableInterior.value){
                     return true;
                }else{
                     return false;
                }
            }else{
                if(tableNeed <= tableAvailableExterior.value){
                     return true
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

            console.log(reserveFilterInterior, reserveFilterExterior)
        };

        const checkHourIsPass = () => {
            let dayActual = new Date()
            
            const hourActual = `${dayActual.getHours()}:${dayActual.getMinutes()}`
            let dayActualShort = dayActual.toISOString().substring(0,10)
                dateSelect.value = new Date(dateSelect.value).toISOString().substring(0, 10);
    
            if( dayActualShort === dateSelect.value && checkedHour.value < hourActual ){
                emit('modal', 'Hora inferior de la actual', paramsModal, 'error'  )
                putHourActual()
            }else if(dayActualShort > dateSelect.value ){
                emit('modal', 'El día es anterior al actual', paramsModal, 'error' )
                checkedHour.value = null
            }
                
        };

        const putHourActual = () => {
            console.log()
            const dayActual = new Date()
            let hours = dayActual.getHours();
            let minutes = dayActual.getMinutes();
            
            hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
            minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
            
            const hourActual = `${hours}:${minutes}`
            console.log(hourActual)
           
            if(hourActual <= '12:00'){
                checkedHour.value = '12:00'
                
            }else {
                checkedHour.value = `${hours + 1}:00`
            }

        }

        const atributteMinInput = () => {
            attributeMin.value =  new Date().toISOString().substring(0, 10);
            dateSelect.value = attributeMin.value;
        }

        atributteMinInput()
        getReserveApi()
        putHourActual()

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