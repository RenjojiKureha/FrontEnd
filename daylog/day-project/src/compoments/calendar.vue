<script setup>

import { computed } from 'vue'

// 双向绑定app的selectDate
const props = defineProps({
  // 双绑默认属性名modelValue
  modelValue: Date 
})
// 双绑声明一个用于更新 modelValue 的事件
const emit = defineEmits(['update:modelValue']) 

// 用计算属性处理传来的数据
const date = computed({
  // 拿到这个传进来的日期
  get() {
    return props.modelValue
  },
  // v-date-picker更新日期的时候，emit给双亲组件新的值
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<template>
  <div>
    <v-date-picker v-model="date" class="cal"/>
  </div>
</template>

<style scoped>

div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    /* border: 5px solid #999; */
    box-sizing: border-box;
}
.cal {
    width: 100%;
    margin: 0 auto;
}

</style>