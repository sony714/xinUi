<template>
<div class="button-content">
    <h3>普通按钮</h3>
  <div>
    <Button theme="default">
      <span>默认按钮</span>
    </Button>
    <Button theme="primary">
      <span>主要按钮</span>
    </Button>
    <Button theme="success">
      <span>成功按钮</span>
    </Button>
    <Button theme="danger">
      <span>危险按钮</span>
    </Button>
    <Button theme="info">
      <span>朴素按钮</span>
    </Button>
  </div>
   <h3>圆角按钮</h3>
  <div>
    <Button theme="default" round>
      <span>默认按钮</span>
    </Button>
    <Button theme="primary" round>
      <span>主要按钮</span>
    </Button>
    <Button theme="success" round>
      <span>成功按钮</span>
    </Button>
    <Button theme="danger" round>
      <span>危险按钮</span>
    </Button>
    <Button theme="info" round>
      <span>朴素按钮</span>
    </Button>
  </div>
  <h3>禁用按钮</h3>
  <div>
    <Button theme="default" disabled>
      <span>默认按钮</span>
    </Button>
    <Button theme="primary" disabled>
      <span>主要按钮</span>
    </Button>
    <Button theme="success" disabled>
      <span>成功按钮</span>
    </Button>
    <Button theme="danger" disabled>
      <span>危险按钮</span>
    </Button>
    <Button theme="info" disabled>
      <span>朴素按钮</span>
    </Button>
  </div>
   <h3>大按钮和小按钮</h3>
    <div>
    <Button theme="default" size="big">
      <span>大大大大</span>
    </Button>
    <Button theme="primary" size="medium">
      <span>中中中中</span>
    </Button>
    <Button theme="success" size="small">
      <span>小小小小</span>
    </Button>
    <Button theme="danger" size="mini">
      <span>超小超小</span>
    </Button>
  </div>
  <h3>loading</h3>
 <div>
     <Button loading>
         <span>加载中</span>
     </Button>
        <Button>
         <span>加载完毕</span>
     </Button>
 </div>
</div>
</template>
<script setup lang="ts">
import Button from "../lib/Button.vue";
</script>

<style lang='scss'>
    .button-content{
        div{
            display: flex;
            flex-direction: row;
            padding: 10px;
        }
    }
</style>
