<demo>
  普通示例
</demo>
<template>
  <div>
    <Dialog v-model:visible="visible">
      <template v-slot:title>
        <h1>Hi,I am title</h1>
      </template>
      <template v-slot:content>
        <div>
          <p>there is content</p>
        </div>
      </template>
    </Dialog>
    <Button @click="toggle" theme="primary">
      <span>弹窗</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const content = "I an Dialog ,what is your name";
const title = "Hi I am Title";
</script>

<style lang="scss" scoped></style>
