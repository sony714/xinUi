<template>
  <calendar v-model:date="value" />
  <calendar v-model:date="value2" />
  <Button @click="handleValue">点击切换</Button>
</template>
 
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Calendar from "../lib/Calendar.vue";
import Button from "../lib/Button.vue";
let value = ref(new Date());
let value2 = ref("2021-12");
const handleValue = () => {
  value2.value = "2021-14";
};
</script>

<style scoped></style>
