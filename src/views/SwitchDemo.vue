<template>
    <div>
        <Switch v-model:value="checked"/>
    </div>
</template>
 
<script setup lang="ts">
import Switch from '../lib/Switch.vue';
import { ref } from '@vue/reactivity';
  let checked = ref(false)
</script>
 
<style scoped>

</style>

