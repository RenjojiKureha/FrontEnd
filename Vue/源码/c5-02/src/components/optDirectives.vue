<template>
    <h3>选项式api-自定义指令</h3>
    <p v-author>学习前端</p>
    <p v-author="">使用自定义指令</p>
</template>

<script>
export default{
    directives:{
        // 自定义指令
        author:{
            mounted(element){
                console.log(element);
                element.innerHTML = element.innerHTML + "-作者"
            }
        }
    }
}
</script>