<template>
    <h3>局部自定义指令</h3>
    <p v-red>{{ msg }}</p>
    <p v-blue>同样使用全局</p>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref("红色效果")

// 局部指令
const vRed ={
    mounted(element){
        element.style.color = "red"
    }
}
</script>