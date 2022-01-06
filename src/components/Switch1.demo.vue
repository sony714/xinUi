
<template>
  <Switch v-model:value="checked"/>
</template>

<script setup lang="ts">
import Switch from '../lib/Switch.vue';
import { ref } from '@vue/reactivity';

 let checked = ref(false)
</script>
 
<demo>
  常规用法
</demo>
<style scoped>

</style>