<script>
import { ref } from 'vue'
import logList from './compoments/logList.vue';
import calender from './compoments/calendar.vue';
import test from './compoments/test.vue';

export default {
  components: {
    logList,
    calender,
    test,
  },
  // 2. 将数据定义在 data() 函数中
  data() {
    return {
      selectedDate: new Date(),
    }
  }
};
</script>

<template>

  <!-- <test/> -->
  <calender v-model="selectedDate"/>

  <logList :selected-date="selectedDate"/>
  
</template>

<style scoped></style>
