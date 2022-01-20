<demo>
    传递字符串
</demo>
 
<template>
     <calendar v-model:date="value2" />
     <Button @click="handleValue">切换</Button>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Calendar from "../lib/Calendar.vue";
import Button from "../lib/Button.vue";
let value2 = ref("2021-12");
const handleValue = () => {
  value2.value = "2020-10";
};
</script>

<style lang="scss" scoped>

</style>