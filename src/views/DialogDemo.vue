<template>
    <div>
        <h3>示例一</h3>
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
        <Button @click="toggle" theme='danger'>
            <span>弹窗</span>
        </Button>
    </div>
<div>
      <h3>示例二</h3>
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

<script setup lang="ts">
 import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../until/dialog'
 const visible = ref(false)
 const toggle = ()=>{
     visible.value = !visible.value
 }
 const content = 'I an Dialog ,what is your name'
 const title = 'Hi I am Title'
 const show = ()=>{
     openDialog({
         title,
         content
     })
 }
</script>

<style scoped>
  
</style>