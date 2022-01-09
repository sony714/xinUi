<template>
  <section>
    <header>2012-5</header>
    <main>
      <div class="blockWeek">
        <div class="week" v-for="(item, index) in weeks" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="blockDate">
        <div class="date" v-for="(item, index) in 31" :key="index">
          {{ item }}
        </div>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //获取每月的天数
const weeks = ["日", "一", "二", "三", "四", "五", "六"];
const dates = ref<[]>([]); //填充的数据
const props = defineProps({
  date: Date,
});
onMounted = (()=>{
    data()
})
const data = () => {
  const year = props.date?.getFullYear();
  const month = props.date?.getMonth() + 1;
  const day = props.date?.getDate();
  getDates(year, month);
};
const getDates = (year: Number, month: Number) => {
  //获取当前时间的星期
  let targetDay = new Date(year + "-" + month + "-" + 1).getDay();
  //判断闰年
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days[1] = 29;
  }
  if (targetDay > 0) {
    for (let i = 0; i < targetDay; i++) {
      dates.push("");
    }
    for (let i = 0; i < days[month - 1]; i++) {
      dates.push(i + 1);
    }
     let nextNum
     if (dates.length > 35) {
        nextNum = 42 - dates.length;
      } else {
        nextNum = 35 - dates.length;
      }
    for(let i=0;i<nextNum;i++){
        dates.push('')
    }
  }
};
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
      flex: 1 0 13.2%;
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
      justify-content: center;
      align-items: center;
      .date {
        flex: 1 0 13.2%;
        text-align: center;
        padding: 3px 0;
        &:hover {
          background-color: $green;
        }
      }
    }
  }
}
</style>
