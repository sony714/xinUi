
// @ts-nocheck
<template>
    <div class="topNav">
      <div class="toggle" @click="toggle" v-if="toggleMenuButtonVisible">
       <svg class="icon">
         <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon">
         <use xlink:href="#icon-king"></use>
      </svg>
    </router-link>
    <div class="menu">
      <router-link to="/" class="menu_item">文档</router-link>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { inject } from "@vue/runtime-core";
import { useRouter } from "vue-router";

  const props = defineProps({
     toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  })
  const router = useRouter()
  let menuVisible = inject('menuVisible')
  const toggle = function(){
    menuVisible.value = !menuVisible.value
  }
</script>

<style lang='scss'  scoped>
$green: #02bcb0;
 .topNav {
  position: fixed;
  top: 0;
  padding: 10px;
  width: 100%;                    
  display: flex;
  justify-content: space-between;
   z-index: 10;
  .logo {
    padding-left: 30px;
    .icon{
      font-size: 36px;
    }
  }
  .toggle{
     width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
     >icon{
       width: 38px;
       height: 38px;
     }
  }
  .menu {
   float: right;
    .menu_item {
      padding: 10px;
      color: $green;
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