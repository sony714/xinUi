<demo>
 普通按钮
</demo>



<template>
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
</template>

<script setup lang="ts">
 import Button from '../lib/Button.vue'
</script>

<style lang="scss" scoped>

</style>