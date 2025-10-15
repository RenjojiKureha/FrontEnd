<template>
  <optCpnt/>
  <cpstCpnt/>
  <optRef/>
  <cpstRef/>
</template>

<script>

import optCpnt from './components/optCpnt.vue'
import cpstCpnt from './components/cpstCpnt.vue'

import optRef from './components/optRef.vue';
import cpstRef from './components/cpstRef.vue';

export default {
  name: 'App',
  components: {
    optCpnt,
    cpstCpnt,
    optRef,
    cpstRef
  }
}
</script>

<style scoped></style>
