<template>
    <h3>组件事件</h3>
    <child @someEvent="getHandle"/>
    <p>母元素：{{message}}</p>
</template>

<script>
import child from './child.vue'
export default {
    name: 'componentEvent',
    data() {
        return {
            message:""
        }
    },
    components: {
        child
    },
    methods: {
        getHandle() {
            console.log("触发了", data);
            this.message = data;
        }
    }
}
</script>