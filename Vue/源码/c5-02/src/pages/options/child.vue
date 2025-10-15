<template>
    <h3>选项式api-child</h3>
    <p>{{title}}</p>
</template>

<script>
export default {
    name: 'childOpt',
    props: {
        title:{
            type: String,
            default: '默认数据'
        }
    }
}
</script>