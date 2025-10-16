<template>
    <h3>自定义指令钩子函数的参数</h3>
    <p v-myShow:foo="flag">{{ msg }}</p>
    <button @click="updateHandle">切换</button>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref("模拟v-show指令")
const flag = ref(true)

function updateHandle(){
    flag.value = flag.value === true ? flag.value = false : flag.value = true
}

// 模拟v-show指令
const vMyShow = {
    updated(el, binding){
        binding.value === true ? el.style.display = "block" : el.style.display = "none"
    }
}
</script>