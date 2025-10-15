<template>
    <h3>组合式api</h3>
    <p>{{ count }}</p>
    <button @click="add">增加</button>
</template>

<script setup>

import { ref } from 'vue'
const count = ref(0)

function add(e){
    console.log(e);
    // .value是读取ref数据的
    count.value++
}

</script>