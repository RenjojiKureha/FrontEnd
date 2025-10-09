<script>

export default {
  data(){
    return{
      message:"组件基础组成"
    }
  }
}

</script>

<!-- scpoed：让当前样式只在当前组件生效 -->
<style scoped>

.container{
  font-size: 30px;
  color: red;
}

</style>

<!-- 此为必须存在，上面两者任意 -->
<template>

  <div class="container">{{ message }}</div>

</template>