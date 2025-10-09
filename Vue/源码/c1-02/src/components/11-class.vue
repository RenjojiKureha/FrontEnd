<script>

export default {
    data(){
        return{
            isActive: true,
            // isActive: false,
            hasError: true,
            classObject:{
                'active': true,
                'text-danger': true,
            },
            arrActive: "active",
            arrHasError: "text-danger",
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

    <h3>class样式绑定</h3>

    <!-- 后者为true显示，为false不显示 -->
    <p :class="{ 'active': isActive, 'text-danger': hasError}">测试1</p>
    <p :class="classObject">测试2</p>
    <p :class="[arrActive, arrHasError]">测试3</p>
    <p :class="[isActive ? 'active text-danger' : '']">测试4</p>
    <!-- 数组和对象的嵌套过程中，只能是数组嵌套对象，不能反其道而行，即中括号内可大括号，大括号内不可中括号 -->
    <p :class="[isActive ? 'active' : '', {'text-danger':hasError}]">测试5</p>


</template>