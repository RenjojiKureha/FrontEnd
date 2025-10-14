<template>
    <h3>组合式api-简约写法</h3>
    <p>{{ msg }}</p>
    <p>{{ userInfo.name }}</p>
</template>

<script setup>
// 只能是组合式
import { ref, reactive } from 'vue'
const msg = ref('组合式api 绑定数据-简约写法')
const userInfo = reactive({
    name: '张三',
    age: 18
})
</script>