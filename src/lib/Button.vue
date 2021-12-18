import { computed } from "vue";

<template>
  <div>
    <button
      class="xinxin-button"
      :class="classes"
      :disabled="disabled"
    >
      <span v-if="loading" class="xinxin-loading"></span>
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  theme: {
    type: String,
    default: "button",
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "medium",
  },
  loading: {
    type: Boolean,
    default: false,
  }
});
const classes = computed(()=>{
       return  [
        { 'xinxin-round': props.round, 'xinxin-disabled': props.disabled },
        `xinxin-theme-${props.theme}`,
        ,
        `xinxin-size-${props.size}`,
      ]
 })
</script>

<style lang="scss">
.xinxin-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.xinxin-theme-primary {
    background-color: #409eff;
    border-color: #409eff;
    &.xinxin-disabled {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:focus,
    &:hover {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
  &.xinxin-theme-success {
    background: #85ce61;
    border-color: #85ce61;
    &.xinxin-disabled {
      background: #85ce61;
      border-color: #85ce61;
    }
    &:focus,
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  &.xinxin-theme-danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.xinxin-disabled {
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    &:focus,
    &:hover {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  &.xinxin_theme-info {
    background-color: #909399;
    border-color: #909399;
    &.xinxin-disabled {
      background-color: #909399;
      border-color: #909399;
    }
    &:focus,
    &:hover {
      background-color: #909399;
      border-color: #d1d3d8;
      color: #fff;
    }
  }
  &.xinxin-round {
    border-radius: 20px !important;
    padding: 12px 23px !important;
  }

  &.xinxin-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  &.xinxin-size-big {
    padding: 20px 40px;
    font-size: 18px;
    border-radius: 4px;
  }
  &.xinxin-size-medium {
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 4px;
  }
  &.xinxin-size-small {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.xinxin-size-mini {
    padding: 2px 3px;
    font-size: 12px;
    border-radius: 4px;
  }
}
.xinxin-loading {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: blue blue blue transparent;
  border-style: solid;
  border-width: 2px;
  animation: xinxin-spin 1s infinite linear;
}

@keyframes xinxin-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
