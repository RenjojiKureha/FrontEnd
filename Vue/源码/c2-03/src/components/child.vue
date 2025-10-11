<template>
    <button @click="clickEventHandle">传递数据</button>
</template>

<script>
export default {
    name: 'child',
    methods: {
        clickEventHandle() {
            // 自定义事件
            this.$emit('someEvent','传递的数据')
        }
    }
}
</script>