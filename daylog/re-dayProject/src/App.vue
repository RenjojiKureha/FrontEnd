<template>

  <!-- <test/> -->
  <calender/>
  <logList :selected-date="selectedDate"/>
  
</template>

<script>

import calender from './components/calendar.vue';
import logList from './components/logList.vue';
import test from './components/test.vue'

export default {
  components: {
    calender,
    logList,
    test,
  },

  data() {
    return {
    }
  }
};
</script>


<style scoped></style>
