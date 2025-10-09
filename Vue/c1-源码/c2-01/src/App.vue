<script>

// 第一步：引入组件
import myComponent from "./components/16-myComponent.vue"

export default {
  // 第二步：注入组件
  components:{
    myComponent,
  }
}

</script>

<style>

</style>

<template>

  <!-- 第三步：显示组件 -->
  <myComponent/>

</template>