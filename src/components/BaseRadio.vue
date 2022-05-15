<script setup>
import { ref, computed } from "@vue/reactivity"


const props = defineProps({
    type: String,
    value: [String, Number],
    valueSelected: String,
    id: String,
    textLabel: String,
    required: String,
    isRowReverse: {
        type: Boolean,
        default: false
    },
    isInline: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['change', 'input'])

</script>
<template>
    <div :class="{'row-reverse d-flex': isRowReverse }">
        <label :class="{'d-block pb-1': !isInline }" :for="id">{{textLabel}}</label>
        <input 
            v-model="valueSelected"
            :id="id" 
            type="radio" 
            :value="value"
            :required="required"
            @change="emit('change', $event)"
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