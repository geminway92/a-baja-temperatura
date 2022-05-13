<script setup>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

const props = defineProps({
    type: String,
    zone: Object,
    model: String,
    id: String,
    textLabel: String,
    name: String,
    value: String
})

</script>
<template>
    <div>
        <input 
            :id="id" 
            :type="type" 
            :name="name"  
            :value="value" 
            v-model="model"
        >
        <label :for="id">{{textLabel}}</label>
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