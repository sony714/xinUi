<template>
    <div>
        <Input size="big" state="success"/>
        <Input size="medium" state="error"/>
        <Input size="small" state="info"/>
        <Input size="small" state="warning"/>
        <Input size="medium" state="error" clearable/>
        <Input size="big" state="success" />
        <Input size="big" state="success" v-model:value="value"/>
    </div>
</template>

<script setup lang="ts">
 import { ref } from '@vue/reactivity'
import Input from '../lib/Input.vue'
 const value = ref(123456)

</script>

<style scoped>

</style>