<template>
    <h3>组合式api-自定义指令</h3>
    <p v-author="">学习前端</p>
    <p vAuthor>这个不行，只能上面的形式</p>
</template>

<script setup>
const vAuthor = {
    mounted:(element)=>{
        console.log(element);
        element.innerHTML = element.innerHTML + "-作者"
    }
}
</script>