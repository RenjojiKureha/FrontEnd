<template>
    <div>
        <h2>选项式API</h2>
        <button @click="increment">count is ：{{ count }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    mounted() {
        console.log(`the initial count is ${this.count}`)
    }
}
</script>