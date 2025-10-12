<template>
    <h3>main</h3>
    <p>当前搜索内容：{{search}}</p>
    <searchCpnt @searchEvent="getSearch"/>
</template>

<script>
import searchCpnt from './searchCpnt.vue'
export default {
    name: 'main',
    components: {
        searchCpnt
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getSearch(data) {
            this.search = data;
        }
    }
}
</script>