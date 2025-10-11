<template>
    <h3>组件A</h3>
    <ComponentB :title="title" :age="age"/>
</template>

<script>
import ComponentB from './componentB.vue';

export default {
    name: "ComponentA",
    data() {
        return {
            title: "我是来自组件A的数据",
            age: 20,
            names: ['张三', '李四', '王五'],
        };
    },
    components: {
        ComponentB,
    }
}
</script>