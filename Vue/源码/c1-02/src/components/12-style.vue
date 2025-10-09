<script>

export default {
    data(){
        return{
            activeColor: "green",
            fontSize: 30,
            styleObject:{
                color: "red",
                fontSize: "20px",
            },
        }
    },
}

</script>

<style>

.active{
    font-size: 30px;
}

.text-danger{
    color: red;
}

</style>

<template>

    <h3>style绑定</h3>

    <!-- 绑定对象 -->
    <p :style="{color: activeColor, fontSize: fontSize + 'px'}">测试1</p>
    <p :style="styleObject">测试2</p>
    <!-- 绑定数组 -->
    <p :style="[styleObject]">测试3</p>


</template>