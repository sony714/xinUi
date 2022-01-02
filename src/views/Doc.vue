<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import Topnav from "../components/Topnav.vue";
const menuVisible = inject("menuVisible");
</script>
 
<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <div class="tabBar">
          <h3>路由列表</h3>
          <ul>
            <li>
              <router-link to="/doc/dialog">dialog</router-link>
            </li>
            <li>
              <router-link to="/doc/button">button</router-link>
            </li>
            <li>
              <router-link to="/doc/switch">switch</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">tabs</router-link>
            </li>
          </ul>
        </div>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  aside {
    flex-shrink: 0;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    .tabBar {
      margin: 0 auto;
      h3{
        text-align: center;
      }
      ul li {
        text-align: center;
        padding: 10px 0;
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
  main {
    flex-grow: 1;
    padding: 20px;
    overflow: auto;
  }
}
</style>
