<template>
    <div>
        <h2>组合式API</h2>
        <button @click="increment">count is : {{ count }}</button>
    </div>
</template>

<script setup>
import { onMounted , ref } from 'vue';

const count = ref(0)
function increment() {
    count.value++
}
onMounted(() => {
    console.log('the initial count is ${count.value}')
})
</script>