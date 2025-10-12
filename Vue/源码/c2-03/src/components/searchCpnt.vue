<template>
    搜索：<input type="text" v-model="search">
</template>

<script>
export default {
    name: 'searchCpnt',
    data() {
        return {
            search: ''
        }
    },
    watch: {
        search(newVal,oldVal) {
            this.$emit('searchEvent', newVal)
        }
    }
}
</script>