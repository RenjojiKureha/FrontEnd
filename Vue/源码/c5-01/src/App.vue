<template>
  <h3>选项式api和组合式api的区别</h3>
  <Options />
  <Composition />
</template>

<script>
import Options from './components/options.vue'
import Composition from './components/composition.vue'
export default {
  name: 'App',
  components: {
    Options,
    Composition
  }
}
</script>