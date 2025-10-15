<template>
    <h3>组合式api-parent</h3>
    <Child title="传数据" :age="age"/>
</template>

<script setup>

import Child from './child.vue'
import { ref } from 'vue'

const age = ref(18)

</script>