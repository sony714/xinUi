<template>
  <Topnav />
  <div class="main">
    <div class="top">
      <h2>新新UI</h2>
      <p>一个非常厉害的UI，简洁好用</p>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <router-link to="/doc">起步</router-link>
        </li>
        <li>GitHub</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Topnav from "../components/Topnav.vue";
</script>

<style lang="scss">
.main {
  background-color: pink;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .top {
      margin-bottom: 20px;
    > h2 {
      text-align: center;
      padding: 20px;
    }
  }
  .bottom {
    ul {
      display: flex;
      li {
        padding: 10px;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 14px;
        margin: 10px;
        cursor: pointer;
        &:first-child {
          background-color: greenyellow;
        }
        &:nth-child(2) {
          background-color: green;
        }
      }
    }
  }
}
</style>
