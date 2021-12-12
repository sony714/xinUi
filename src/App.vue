<script setup lang="ts">
  import { provide, ref } from 'vue'
import { router } from './until/router'
   
  let width = document.documentElement.clientWidth
  addEventListener('resize',()=>{
    width = document.documentElement.clientWidth
  })
  const menuVisible = ref(width>500?true:false)
   router.afterEach(()=>{
    if(width<=500){
       menuVisible.value = !menuVisible.value
    }
  })
  provide('menuVisible',menuVisible)
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
