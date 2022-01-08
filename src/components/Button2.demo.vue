<demo>
 圆角按钮
</demo>

<template>
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
</template>

<script setup lang="ts">
 import Button from '../lib/Button.vue'
</script>

<style lang="scss" scoped>

</style>