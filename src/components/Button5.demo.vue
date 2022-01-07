<demo>
 圆角按钮
</demo>

<template>
     <h3>loading</h3>
 <div>
     <Button loading>
         <span>加载中</span>
     </Button>
        <Button>
         <span>加载完毕</span>
     </Button>
 </div>
</template>

<script setup lang="ts">
 import Button from '../lib/Button.vue'
</script>

<style lang="scss" scoped>

</style>