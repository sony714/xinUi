<template>
    <div class="topNav">
       <div class="toggle" @click="toggle"></div>
    <div class="logo" >logo</div>
    <div class="menu">
      <span class="menu_item">菜单一</span>
      <span class="menu_item">菜单二</span>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { inject } from "@vue/runtime-core";
  let menuVisible = inject('menuVisible')
  const toggle = function(){
    menuVisible.value = !menuVisible.value
  }
</script>

<style lang='scss'  scoped>
 .topNav {
  position: fixed;
  top: 0;
  padding: 10px;
  width: 100%;
  background-color:rgba($color: #ffa2a6, $alpha: 0.5);                     
  display: flex;
  justify-content: space-between;
  .logo {
    padding-left: 30px;
  }
  .toggle{
    width: 25px;
    height: 25px;
    background-color: yellow;
    display: none;
  }
  .menu {
   float: right;
    .menu_item {
      padding: 10px;
    }
  }
  @media (max-width:500px) {
      .menu{
         display: none;
      }
      .logo{
        margin: 0 auto;
      }
      .toggle{
        display: block;
      }
  }
}
</style>