<template>
    <h3>组合式api</h3>
    <p ref="msg">组合式api-模板引用</p>
</template>

<script setup>

import { ref, onMounted } from 'vue'

// 声明一个ref来存放该元素的引用，必须和模板里的ref名称一致
const msg = ref(null)
const count = ref(0);

console.log(msg);

// 不能放在最外层，因为在dom还没有渲染的时候，这里的代码就已经执行了
// 必须保证在dom渲染完毕之后再去获取
onMounted(()=>{
    msg.value.innerHTML = '组合式api-模板引用-修改后的内容'
    console.log(msg.value);
    
})
</script>