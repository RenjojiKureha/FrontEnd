<template>
    <h3>选项式api-child</h3>
    <p>{{title}}</p>
    <button @click="sendMsg">发送数据</button>
</template>

<script>
export default {
    name: 'childOpt',
    props: {
        title:{
            type: String,
            default: '默认数据'
        }
    },
    data(){
        return {
            msg: 'childOpt的数据'
        }
    },
    methods: {
        sendMsg(){
            this.$emit('getMsg',this.msg)
        }
    }
}
</script>