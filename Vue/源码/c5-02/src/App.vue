<template>
  <!-- <optCpnt/>
  <cpstCpnt/>
  <optRef/>
  <cpstRef/> -->
  <!-- <parentOpt/>
  <parentCpst/> -->
  <optDirectives/>
  <cpstDirectives/>

</template>

<script>

import optCpnt from './components/optCpnt.vue';
import cpstCpnt from './components/cpstCpnt.vue';

import optRef from './components/optRef.vue';
import cpstRef from './components/cpstRef.vue';

import parentOpt from './pages/options/parent.vue';
import parentCpst from './pages/composition/parent.vue';

import optDirectives from './components/optDirectives.vue';
import cpstDirectives from './components/cpstDirectives.vue';

export default {
  name: 'App',
  components: {
    optCpnt,
    cpstCpnt,
    optRef,
    cpstRef,
    parentOpt,
    parentCpst,
    optDirectives,
    cpstDirectives
  }
}
</script>

<style scoped></style>
