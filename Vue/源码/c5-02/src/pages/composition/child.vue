<template>
    <h3>组合式api-child</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <button @click="sendMsg">发送数据</button>
</template>

<script setup>

import { ref } from 'vue';

const msg = ref('数据来自child');
const emit = defineEmits(['send']);

const props = defineProps({
    title: { 
        type: String, 
        default: '默认标题'
    },
    age: {
        type: Number,
        default: 0
    }
})

// console.log(props);
// console.log(props.age);
// console.log(props.title);

function sendMsg() {
    // 触发事件
    // emit('send', msg.value);
    // 触发自定义事件
    // const emit = defineEmits(['send']); <= 改到上面定义了
    emit('send', msg.value);
}

</script>