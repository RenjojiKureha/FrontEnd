<template>
    <h3>自定义指令的钩子函数</h3>
    <p v-red v-if="flag">{{ msg }}</p>
    <button @click="update">修改内容</button>
    <button @click="del">删除元素</button>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref("红色效果")
const flag = ref(true)

function update(){
    msg.value = "改之"
}

function del(){
    flag.value = false
}

const vRed = {
    // 每个里头都有这四个
    created(el, binding, vnode, prevVnode){
        console.log("created");
        
    },
    beforeMount(){
        console.log("beforeMount");
        
    },
    mounted(){
        console.log("mounted");
        
    },
    beforeUpdate(){
        console.log("beforeUpdate");
        
    },
    updated(){
        console.log("updated");
        
    },
    beforeUnmount(){
        console.log("beforeUnmount");
        
    },
    unmounted(){
        console.log("unmounted");
        
    }
}

</script>