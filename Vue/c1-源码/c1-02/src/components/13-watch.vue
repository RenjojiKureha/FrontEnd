<script>

export default {
    data(){
        return{
            message: "hello",
        }
    },
    methods:{
        updateHandle(){
            this.message = "world";
        }
    },
    // 侦听器
    watch:{
        // 函数名必须与侦听的数据对象保持一致
        message(newValue, oldValue){
            // newValue: 改变之后的新值
            // oldValue: 改变前的数据
            console.log(newValue,oldValue);
            // 数据发生变化，自动执行的函数
        }
    }
}

</script>

<template>

    <h3>侦听器</h3>

    <p>{{ message }}</p>
    <button @click="updateHandle">修改数据</button>

</template>