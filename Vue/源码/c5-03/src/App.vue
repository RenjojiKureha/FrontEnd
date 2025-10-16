<template>
  <directiveScoped/>
  <p v-blue>用全局自定义方法变蓝</p>
  <directiveLife/>
</template>

<script>
import directiveScoped from './components/directiveScoped.vue';
import directiveLife from './components/directiveLife.vue';
export default {
  components:{
    directiveScoped,
    directiveLife,
  }
}
</script>

<style scoped></style>
