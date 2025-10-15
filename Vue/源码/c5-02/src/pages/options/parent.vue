<template>
    <h3>选项式api-parent</h3>
    <childOpt title="传递数据" @getMsg="gotMsg"/>
    <p>{{ msg }}</p>
</template>

<script>
import childOpt from './child.vue';
export default {
    name: 'parentOpt',
    data(){
        return {
            msg: ''
        }
    },
    components: {
        childOpt
    },
    methods: {
        gotMsg(val){
            this.msg = val;
        }
    }
}
</script>