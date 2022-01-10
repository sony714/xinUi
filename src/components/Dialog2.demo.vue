
<demo>打开代码块</demo>
<template>
    <div>
        <Dialog v-model:visible='visible'>
               <template v-slot:title>
    <h1>Hi,I am title</h1>
  </template>
      <template v-slot:content>
          <div>
          <p>
              there is content
          </p>
          </div>
      </template>
        </Dialog>
        <Button @click="show">
            <span>一句话打开dialog</span>
        </Button>
    </div>
</template>

<script setup>
import {openDialog} from '../lib/dialog'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
 import { ref } from 'vue'
const visible = ref(false)
 const content = 'I an Dialog ,what is your name'
 const title = 'Hi I am Title'
 const toggle = ()=>{
     visible.value = !visible.value
 }
 const show = ()=>{
     openDialog({
         title,
         content
     })
 }
</script>

<style lang="scss" scoped>

</style>