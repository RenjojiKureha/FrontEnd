<template>
    <h3>componentA</h3>
    <p>{{ msg }}</p>
    <componentB title="标题" :onEvent="dataFn"/>
</template>

<script>
import componentB from './componentB.vue';

export default {
    name: "componentA",
    data() {
        return {
            msg:""
        }
    },
    components: {
        componentB
    },
    methods: {
        dataFn(data) {
            this.msg = data
        }
    },  
}
</script>