<template>
    <div :class="[{'active':checked},'switch']" @click="toggle">
        <span :class="{'checked':checked}"></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
  const checked = ref(true)
  const toggle = ()=>{
      checked.value = !checked.value
  }
</script>

<style lang='scss' scoped>
    $h:30px;
   .switch{
       width: 70px;
       height: $h;
       background-color: pink;
       border: 1px solid red;
       border-radius:calc($h/2);  
       position: relative;
       span{
           width: 30px;
           height: 28px;
           background: #0586db;
           position: absolute;
           left: 38px;
           top: 2;
           border-radius:50%;
           transition: left 300ms;
       }
   }
  .switch span.checked{
       left: 2px;
   }
   .switch.active{
       background-color: yellowgreen;
   }
   
</style>