<template>
    <h3>组合式api-child</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
</template>

<script setup>
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

console.log(props);
console.log(props.age);
console.log(props.title);



</script>