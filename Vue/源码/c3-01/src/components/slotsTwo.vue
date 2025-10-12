<template>
    <h3>slots续集</h3>
    <slot name="header"></slot>
    <a href="#">我是插入在中间的内容</a>
    <slot name="main"></slot>
</template>

<script>
export default {
    name: 'slotsTwo',
    data() {
        return {

        }
    }
}
</script>