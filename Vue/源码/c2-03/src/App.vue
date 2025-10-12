<template>
  <!-- <componentEvent/>  -->
  <!-- <Main/> -->
  <componentA/>
</template>

<script>
import componentEvent from './components/componentEvent.vue';
import Main from './components/main.vue';
import componentA from './components/componentA.vue';

export default {
  name: 'App',
  components: {
    componentEvent,
    Main,
    componentA,
  }
}
</script>