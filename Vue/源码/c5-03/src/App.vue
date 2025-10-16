<template>
  <directiveScoped/>
  <p v-blue>用全局自定义方法变蓝</p>
</template>

<script>
import directiveScoped from './components/directiveScoped.vue';
export default {
  components:{
    directiveScoped,
  }
}
</script>

<style scoped></style>
