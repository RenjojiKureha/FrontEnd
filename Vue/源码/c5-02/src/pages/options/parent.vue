<template>
    <h3>选项式api-parent</h3>
    <childOpt title="传递数据"/>
</template>

<script>
import childOpt from './child.vue';
export default {
    name: 'parentOpt',
    components: {
        childOpt
    }
}
</script>