<template>
<userComponent/>
</template>

<script>
import myComponent from "./components/myComponent.vue"; 
import userComponent from "./components/userComponent.vue";
export default {
  components: {
    myComponent,
    userComponent
  }
};
</script>