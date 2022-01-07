<demo>
 圆角按钮
</demo>

<template>
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
</template>

<script setup lang="ts">
 import Button from '../lib/Button.vue'
</script>

<style lang="scss" scoped>

</style>