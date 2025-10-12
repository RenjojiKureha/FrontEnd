<template>
    <h3>componentB</h3>
    <p>{{ title }}</p>
    <p>{{ onEvent('传递数据') }}</p>
</template>

<script>
export default {
    name: "componentB",
    data() {
        return {
            
        }
    },
    props: { 
        title: String,
        onEvent: Function
    },
}
</script>