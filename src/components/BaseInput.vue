<script setup>
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

const props = defineProps({
    type: String,
    zone: Object,
    checkedTable: String
})

console.log()
</script>
<template>
    <div>
        <input :id="zone.tableLocation" :type="type" :name="zone.tableLocation"  :value="zone.tableLocation" v-model="checkedTable" >
        <label :for="zone.tableLocation">{{zone.textLabel}}</label>
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