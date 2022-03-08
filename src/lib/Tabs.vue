//@ts-nocheck

<template>
  <div class="xinxin-tabs">
    <div class="xinxin-tabs-wrap" ref="container">
      <div
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: selected === t }"
        :ref="
          (el) => {
            if (el) items[index] = el;
          } 
        "
        :key="index"
        class="xinxin-tabs-wrap-item"
      >
        {{ t }}
      </div>
      <div class="xinxin-tabs-wrap-indicator" ref="indicator"></div>
    </div>
    <div class="xinxin-tabs-content">
      <component
        :is="current"
        :key="current.props.title"
        class="xinxin-content"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useSlots,
  ref,
  computed,
  onMounted,
  onUpdated,
  watchEffect,
} from "vue";
import Tab from "./Tab.vue";
const defaults = useSlots().default();
const items = ref<HTMLDivElement[]>([]);
const indicator = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();
const setIndicator = () => {
  const divs = items.value;
  const result = divs.filter((tag) => tag.classList.contains("selected"))[0];
  const { width } = result.getBoundingClientRect();
  indicator.value.style.width = width + "px";

  const { left: left1 } = container.value.getBoundingClientRect();
  const { left: left2 } = result.getBoundingClientRect();
  const left = left2 - left1;
  indicator.value.style.left = left + "px";
};

onMounted(setIndicator)
onUpdated(setIndicator)
const props = defineProps({
  selected: {
    type: String,
    default: "",
  },
});


const emit = defineEmits(["update:selected"]);
const select = (t) => {
  emit("update:selected", t);
};
defaults.forEach((v) => {
  if (v.type !== Tab) {
    throw Error("标签使用错误,请使用Tab标签");
  }
  if (!v.props?.title) {
    throw Error("标题不能为空");
  }
});

const current = computed(() => {
  return defaults.find((v) => v.props?.title === props.selected);
});

const titles = defaults.map((v, k) => {
  return v.props?.title;
});
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.xinxin-tabs {
  &-wrap {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
