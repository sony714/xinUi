<template>
    <div :class="[{'active':value},'xinxin-switch']" @click="toggle">
        <span :class="{'checked':value}"></span>
    </div>
</template>

<script setup  lang="ts">
 const props = defineProps({
     value:Boolean
 })
 const emit = defineEmits(['update:value', 'delete'])
 const toggle = ()=>{
     emit('update:value',!props.value)
 }
</script>
 
<style lang='scss'>
    $h:30px;
   .xinxin-switch{
       width: 70px;
       height: $h;
       background-color: #ddd;
       border-radius:calc($h/2);  
       position: relative;
       span{
           width: 30px;
           height: 28px;
           background: #fff;
           position: absolute;
           left: 2px;
           top: 1px;
           border-radius:50%;
           transition: left 300ms;
       }
   }
  .xinxin-switch span.checked{
       left: 38px;
   }
   .xinxin-switch.active{
       background-color: blue;
   }
   
</style>