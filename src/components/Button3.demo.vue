<demo>
 圆角按钮
</demo>

<template>
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
</template>

<script setup lang="ts">
 import Button from '../lib/Button.vue'
</script>

<style lang="scss" scoped>

</style>