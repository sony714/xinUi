<template>
  <div class="xinxin-inner-input">
    <input type="text" class="xinxin-input" :class="classes" v-model="searchText">
    <span v-show="clearable" class="xinxin-input-clearable-x" @click="clearValue">x</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
const searchText = ref<any>(123456)
const props = defineProps({
  size: {
    type: String,
    default: "medium",
  },
  state: {
    type: String,
    default: "primary",
  },
  textArea: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() => {
  return [
    {
      "xinxin-input-text_area": props.textArea,
      "xinxin-input-clearable": props.clearable,
    },
    `xinxin-input-size-${props.size}`,
    `xinxin-input-state-${props.state}`,
  ];
});
const clearValue = () => {
  searchText.value = ''
}

</script>

<style lang="scss">
.xinxin-inner-input{
    position: relative;
    width: 220px;
}
.xinxin-input {
  border-radius: 8px;
  border: 0;
  outline: 0;
  padding-left: 14px !important;
  border: 1px solid #555;
  &-text_area {
    height: 100px;
  }
  &-clearable {
     position:absolute;
     top: 0;
     left: 0;
     &-x{
         position: absolute;
         top: 50%;
         right: 20px;
         transform: translateY(36%);
         width: 18px;
         height: 18px;
         border-radius: 50%;
         border: 1px solid rgb(145, 143, 143);
         text-align: center;
         cursor: pointer;
         line-height: 16px;
         font-size: 12px;
     }
  }
  &-size {
    &-medium {
      height: 32px;
    }
    &-mini {
      height: 24px;
    }
    &-big {
      height: 36px;
    }
  }
  &-state {
    &-primary {
      &:focus {
        outline: 1px solid #cff0ff;
      }
    }
    &-error {
      &:focus {
        outline: 1px solid #ffb9c7;
      }
    }
    &-info {
      &:focus {
        outline: 1px solid #cbdbff;
      }
    }
    &-success {
      &:focus {
        outline: 1px solid #b4f4e4;
      }
    }
    &-warning {
      &:focus {
        outline: 1px solid #ffebbd;
      }
    }
  }
}
</style>
