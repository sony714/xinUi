<template>
    <div :class="[{'active':value},'switch']" @click="toggle">
        <span :class="{'checked':value}"></span>
    </div>
</template>

<script setup  lang="ts">
import { ref } from "@vue/reactivity";
// export default{
//    props:{
//        value: Boolean
//    },
//    setup(props: { value: any; },context: { emit: (arg0: string, arg1: boolean) => void; }){
//      const toggle = ()=>{
//          context.emit('update:value',!props.value)
//      }
//      return {
//          toggle
//      }
//    }
// }
 const props = defineProps({
     value:Boolean
 })
 const emit = defineEmits(['update:value', 'delete'])
 const toggle = ()=>{
     emit('update:value',!props.value)
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