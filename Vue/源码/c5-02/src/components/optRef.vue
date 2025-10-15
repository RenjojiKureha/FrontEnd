<template>
    <h3>选项式api</h3>
    <p ref="msg">选项式api-模板引用</p>
</template>

<script>
export default{
    mounted(){
        console.log(this.msg);
        // innerHTML是js对象
        this.$refs.msg.innerHTML = '选项式api-模板引用-修改后的内容'
    },
}
</script>