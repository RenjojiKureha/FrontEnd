<template>
  <!-- <optCpnt/>
  <cpstCpnt/>
  <optRef/>
  <cpstRef/> -->
  <parentOpt/>
  <parentCpst/>

</template>

<script>

import optCpnt from './components/optCpnt.vue';
import cpstCpnt from './components/cpstCpnt.vue';

import optRef from './components/optRef.vue';
import cpstRef from './components/cpstRef.vue';

import parentOpt from './pages/options/parent.vue';
import parentCpst from './pages/composition/parent.vue';

export default {
  name: 'App',
  components: {
    optCpnt,
    cpstCpnt,
    optRef,
    cpstRef,
    parentOpt,
    parentCpst
  }
}
</script>

<style scoped></style>
