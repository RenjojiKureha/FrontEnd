<template>
  <!-- <componentEvent/>  -->
  <Main/>
</template>

<script>
import componentEvent from './components/componentEvent.vue';
import Main from './components/main.vue';
export default {
  name: 'App',
  components: {
    componentEvent,
    Main,
  }
}
</script>