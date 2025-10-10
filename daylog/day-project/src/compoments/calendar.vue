<script setup>
// 1. 导入 computed
import { computed } from 'vue'

// 2. 定义组件要接收的 props 和要触发的 emits
const props = defineProps({
  modelValue: Date // v-model 默认绑定的 prop 是 modelValue
  
})



const emit = defineEmits(['update:modelValue']) // v-model 默认触发的事件

// 3. 创建一个可写的计算属性，作为父子组件之间的桥梁
const date = computed({
  // get() 函数：当组件需要读取日期时，它会从父组件传入的 prop 中获取
  get() {
    return props.modelValue
  },
  // set() 函数：当 v-date-picker 尝试更新日期时，它会触发 emit，通知父组件更新
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