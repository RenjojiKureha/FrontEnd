<template>
  <!-- <h3>选项式api和组合式api的区别</h3>
  <Options />
  <Composition /> -->

  <optionsCpnt />
  <compositionCpnt />
  <cpstCpnts />
</template>

<script>
import Options from './components/options.vue'
import Composition from './components/composition.vue'

import optionsCpnt from './pages/optionsCpnt.vue';
import compositionCpnt from './pages/compositionCpnt.vue';
import cpstCpnts from './pages/cpstCpnts.vue';

export default {
  name: 'App',
  components: {
    Options,
    Composition,
    optionsCpnt,
    compositionCpnt,
    cpstCpnts
  }
}
</script>