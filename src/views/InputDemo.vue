<template>
    <div>
        <Input size="big" state="success"/>
        <Input size="medium" state="error"/>
        <Input size="small" state="info"/>
        <Input size="small" state="warning"/>
        <Input size="medium" state="error" clearable/>
    </div>
</template>

<script setup lang="ts">
 import Input from '../lib/Input.vue'


</script>

<style scoped>

</style>