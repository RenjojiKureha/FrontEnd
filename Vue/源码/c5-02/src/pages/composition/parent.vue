<template>
    <h3>组合式api-parent</h3>
    <Child title="传数据" :age="age" @send="getMsg"/>
    <p>{{ msg }}</p>
</template>

<script setup>

import Child from './child.vue'
import { ref } from 'vue'

const age = ref(18)
const msg = ref('')

function getMsg(val) {
    console.log('接收到子组件传递的数据：', val);
    msg.value = val
}

</script>