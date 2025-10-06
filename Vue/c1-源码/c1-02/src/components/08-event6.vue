<script>

export default {
    data(){
        return{
        }
    },
    methods:{
        clickHandle(e){
            // 阻止默认事件
            // e.preventDefault();
            console.log("点击了");
        },

        clickDiv(){
            console.log("div");
        },
        clickP(e){
            // e.stopPropagation();
            console.log("p");
        },
    }
}

</script>

<template>

    <h3>事件修饰符</h3>

    <a @click.prevent="clickHandle" href="https://baidu.com">示例链接</a>

    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>

</template>