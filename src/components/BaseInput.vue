<script setup>
import { ref } from "@vue/reactivity"


const props = defineProps({
    type: String,
    value: String,
    valueModal: String,
    id: String,
    textLabel: String,
    name: String,
    required: String,
    isRowReverse: {
        type: Boolean,
        default: false
    },
    isInline: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['input'])


</script>
<template>
    <div :class="{'row-reverse d-flex': isRowReverse }">
        <label :class="{'d-block pb-1': !isInline }" :for="id">{{textLabel}}</label>
        <input 
            v-model="valueModal"
            :value="value"
            :id="id" 
            :type="type" 
            :name="name"  
            :required="required"
            @input="emit('input', value)"
        >
    </div>
</template>

<style lang="scss" scoped>
input {
    padding: .5em;
    font-size: 1em;
}

label{
    font-size: 1em;
    font-weight: bold;
}

</style>