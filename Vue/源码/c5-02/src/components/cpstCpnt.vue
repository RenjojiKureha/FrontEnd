<template>
    <h3>组合式api</h3>
    <p>{{ count }}</p>
    <button @click="add">增加</button>
</template>

<script setup>

import { ref, watch, onMounted, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue'
import { watchCount } from '../utils/countUtil.js'

const count = ref(0)

function add(e){
    console.log(e);
    // .value是读取ref数据的
    count.value++
}

// 参数1：要监听的数据
// 参数2：回调函数
// watch(count,(newVal,oldVal)=>{
//     console.log('newVal',newVal);
//     console.log('oldVal',oldVal);
// })
// 优势是可提取到独立文件中使用
watchCount(count)

// 每个生命周期函数方法，都可以独立的处理一个业务
onMounted(()=>{
    console.log('渲染了 cpstCpnt1');
})
onMounted(()=>{
    console.log('渲染了 cpstCpnt2');
})

</script>