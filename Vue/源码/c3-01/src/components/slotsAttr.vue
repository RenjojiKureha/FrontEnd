<template>
    <h3>再续集</h3>
    <slot name="header" :msg="childMessage"></slot>
    <slot name="main" :job="jobMsg"></slot>
</template>

<script>
export default {
    name: 'slotsAttr',
    data() {
        return {
            childMessage: '子组件数据',
            jobMsg: '前端工程师'
        };
    }
}
</script>