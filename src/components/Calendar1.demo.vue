<demo>
    传递时间
</demo>
 
<template>
     <calendar v-model:date="value" />
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Calendar from "../lib/Calendar.vue";
let value = ref(new Date());

</script>

<style lang="scss" scoped>

</style>