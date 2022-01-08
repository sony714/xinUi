<template>
    <h1>Dialog组件示例</h1>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
</template>

<script setup lang="ts">
import Demo from '../components/Demo.vue'
import Dialog1Demo from '../components/Dialog1.demo.vue'
import Dialog2Demo from '../components/Dialog2.demo.vue'
</script>

<style scoped>
  
</style>