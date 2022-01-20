<template>
  <section>
    <header>{{`${year}-${month}`}}</header>
    <main>
      <div class="blockWeek">
        <div class="week" v-for="(item, index) in weeks" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="blockDate">
        <div
          class="date"
          :class="{ active: active === index }"
          @click="active = index"
          v-for="(item, index) in dates"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //获取每月的天数
const weeks = ["日", "一", "二", "三", "四", "五", "六"];
let year = ref();
let dates = ref([]); //填充的数据
let month = ref();
let active = ref(-1);
const props = defineProps({
  date: {
    type: [String, Date],
    default: new Date(),
  }
});
const data = () => {
  year.value = props.date?.getFullYear();
  month.value = props.date.getMonth() + 1;
  getDates(year.value, month.value);
};
const getDates = (year: number, month: number) => {
  dates.value = []
 //获取当前时间的星期
  let targetDay = new Date(year + "-" + month + "-" + 1).getDay();
  
  //判断闰年
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days[1] = 29;
  }
  if (targetDay > 0) {
    for (let i = 0; i < targetDay; i++) {
      dates.value.push("" as never);
    }
    for (let i = 0; i < days[month - 1]; i++) {
      dates.value.push(i + 1);
    }
    let nextNum;
    if (dates.value.length > 35) {
      nextNum = 42 - dates.value.length;
    } else {
      nextNum = 35 - dates.value.length;
    }
    for (let i = 0; i < nextNum; i++) {
      dates.value.push("" as never);
    }
  }else{
    throw new Error('这个时间我不认识!')
  }
};
const handleString = () => {
  year.value = props.date?.split("-")[0];
  month.value = props.date?.split("-")[1];
  getDates(year.value, month.value);
};
watchEffect(() => {
  if (typeof props.date === "string") {
    handleString();
  } else {
    data();
  }
});
</script>

<style lang="scss" scoped>
$green: #02bcb0;
section {
  width: 25%;
  header {
    text-align: center;
  }
  main {
    margin-top: 10px;
    .blockWeek {
      display: flex;
      flex-direction: row;
      flex: 0 0 13.2%;
      .week {
        flex: 1 0 13.2%;
        text-align: center;
        padding: 3px 0;
        background-color: $green;
        color: #fff;
      }
    }
    .blockDate {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: #d9d9d9;
      justify-content: flex-start;
      align-items: center;
      .date {
        flex: 1 0 13.2%;
        text-align: center;
        padding: 3px 0;
        cursor: pointer;
        &:hover {
          background-color: $green;
        }
        &.active {
          background-color: $green;
        }
      }
    }
  }
}
</style>
