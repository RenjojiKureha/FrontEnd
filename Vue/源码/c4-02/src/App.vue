<template>
  <h3>祖宗</h3>
  <!-- <parent msg="祖宗的财产"></parent> -->
  <parent></parent>
</template>

<script>
import parent from './components/parent.vue'
export default {
  components:{
    parent
  },
  provide(){
    return {
      msg: this.msg
    }
  },
  data(){
    return {
      msg:'祖宗的财产'   
    }
  }
}
</script>
