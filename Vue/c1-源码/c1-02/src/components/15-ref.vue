<script>

export default {
    data(){
        return{
            content:"内容"
        }
    },
    methods:{
        getElementHandle(){
            console.log(this.$refs.container.innerHTML = "改之");
            // this.$refs.container.innerHTML = "改之"
            // innerHTML:原生js的属性
            console.log(this.$refs.username.value);
            
        }
    }
}

</script>

<!-- 
内容改变：{{模板语法}}
属性改变：v-bind: | : 的指令
事件：v-on:click即事件类型 | @ 

如果没有特别的需求不要操作dom
 -->

<template>

    <h3>模板引用</h3>

    <div ref="container" class="container">{{ content }}</div>
    <input type="text" ref="username">
    <button @click="getElementHandle">获取元素</button>

</template>