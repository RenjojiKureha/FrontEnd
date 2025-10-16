<template>
  <directiveScoped/>
  <p v-blue>用全局自定义方法变蓝</p>
  <directiveLife/>
  <directiveParams/>
</template>

<script>
import directiveScoped from './components/directiveScoped.vue';
import directiveLife from './components/directiveLife.vue';
import directiveParams from './components/directiveParams.vue';
export default {
  components:{
    directiveScoped,
    directiveLife,
    directiveParams
  }
}
</script>

<style scoped></style>
