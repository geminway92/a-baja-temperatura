<script setup>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core";

const emit = defineEmits(['receiveValue', 'getReserveApi'])


const props = defineProps({
    checkedHour: String,
    hour: String,
    txtColor: {
        type: String,
        default: '#fff'
    },
    bgColor: {
        type: String,
        default: '#6bd098'
    },
    })

let valueInput = ref(props.checkedHour);

const passValueInput = computed(() => {
    emit('receiveValue', valueInput.value)
    return props.checkedHour
})



</script>

<template>
    <div class="toggle-hour" @change="emit('getReserveApi')" >
        <input :id="hour" type="radio" name="hour" :value="hour" v-model="valueInput">
        <label :for="hour">{{ hour }}</label>
    </div>
</template>

<style scoped>
label{
    font-size: 1em;
    font-weight: bold;
}

.toggle-hour{
    display: flex;
    margin: 5px;
    align-items: center;
}

.toggle-hour{
    display: flex;
    margin: 5px;
    align-items: center;
    
}
.toggle-hour label {
    background: v-bind(bgColor);
    color: v-bind(txtColor);
    cursor: pointer;
    padding: .5em;
    border-radius: 5px;
}

.toggle-hour label:hover {
    position: relative;
    left: 5px;
}

.toggle-hour input[type="radio"] {
    display: none;
}

.toggle-hour input[type="radio"]:checked + label {
    background: #eee6c1;
    color: black;
}
</style>

