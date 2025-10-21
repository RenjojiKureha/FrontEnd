<script setup>
import { ref } from 'vue'

const date = ref(new Date())
</script>

<template>
  <div>
    <h1>日历演示</h1>
    <!-- 使用 v-date-picker 组件并用 v-model 绑定数据 -->
    <v-date-picker v-model="date" />
    <p>选择的日期是: {{ date }}</p>
  </div>
</template>

<style>
/* 你可以在这里添加一些样式 */
</style>