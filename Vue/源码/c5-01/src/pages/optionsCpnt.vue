<template>
    <h3>选项式api</h3>
    <p>{{ msg }}</p>
    <p>{{ msg.split("").reverse().join("") }}</p>
    <p>{{ reverseMsg }}</p>
    <!-- <p>{{ demo }}</p> -->
</template>

<script>

export default {
    name: 'OptionsCpnt',
    data() {
        return {
            msg: '选项式api 绑定数据'
        }
    },
    computed:{
        reverseMsg(){
            return this.msg.split("").reverse().join("")
        },
        // 有多少写多少很冗余
        // demo(){
        //     return 123
        // },
        // demo(){
        //     return 123
        // },
        // demo(){
        //     return 123
        // },
    }
}
</script>