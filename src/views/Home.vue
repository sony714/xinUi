<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="main">
      <div class="top">
        <h2>xinUI</h2>
        <p>一个非常厉害的UI，简洁好用</p>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <router-link to="/doc">起步</router-link>
          </li>
          <li><a href="https://github.com/sony714/xinUi">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Topnav from "../components/Topnav.vue";
</script>

<style lang="scss">
$green: #02bcb0;
$border-radius: 14px;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  @media(max-width:500px){
    clip-path: ellipse(80% 60% at 50% 30%);
  }
}
.features {
  margin: 16px auto;
  width: 400px;
  @media (min-width: 800px) {
    margin: 64px auto;
    width: 800px;
  }
  @media (min-width: 1200px) {
    margin: 64px auto;
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 380px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  .top {
    margin-bottom: 20px;
    color: $color;
    > h2 {
      text-align: center;
      padding: 20px;
    }
  }
  .bottom {
    ul {
      display: flex;
      li {
        border: 1px solid #ddd;
        border-radius: $border-radius;
        margin: 10px;
        background-color: $green;
        a {
          color: #fff;
          padding: 10px;
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
}
</style>
