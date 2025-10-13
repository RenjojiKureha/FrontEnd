<template>
    <h3>这是组件A</h3>
    <p>{{ msg }}</p>
    <button @click="updateHandle">更新数据</button>
</template>

<script>

export default {
    name: "componentA",
    data() {
        return {
            msg: "老数据",
        };
    },
    beforeUnmount() {
        console.log("componentA组件被销毁了");
    },
        unmounted() {
        console.log("componentA组件销毁完成");
    },
    methods: {
        updateHandle() {
            this.msg = "新数据";
        },
    },
};
</script>