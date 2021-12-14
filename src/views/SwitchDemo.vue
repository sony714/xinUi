<template>
    <div>
        <Switch v-model:value="checked"/>
    </div>
</template>
 
<script setup lang="ts">
import { ref } from '@vue/reactivity';
import Switch from '../lib/Switch.vue';
  let checked = ref(false)
</script>
 
<style scoped>

</style>

