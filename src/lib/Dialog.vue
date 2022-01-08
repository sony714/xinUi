<template>
  <teleport to="body">
    <div class="xinxin-dialog-wrap" v-if="visible">
      <div class="xinxin-dialog">
        <header>
          <span class="xinxin-dialog_title">
            <slot name="title" />
          </span>
          <span class="xinxin-dialog_close" @click="close">x</span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <Button theme="success" @click="confirm">确认</Button>
          <Button theme="danger" @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["update:visible"]);
const cancel = () => {
  emit("update:visible", !props.visible);
};
const close = () => {
  emit("update:visible", !props.visible);
};
const confirm = ()=>{
  emit("update:visible",!props.visible)
}

</script>

<style lang="scss">
.xinxin-dialog {
  position: relative;
  left: 20%;
  top: 100px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 30%;
   @media(max-width:500px){
     width: 80%;
     left: 10%;
  }
  header {
    padding: 20px 20px 10px;
    .xinxin-dialog_title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .xinxin-dialog_close {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        color: green;
      }
    }
  }
  main {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    button:first-child {
      margin-right: 10px;
    }
    button:nth-child(2) {
      margin-left: 10px;
    }
  }
}

.xinxin-dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  z-index: 2009;
}
</style>
