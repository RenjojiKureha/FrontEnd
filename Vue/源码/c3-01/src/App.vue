<template>
  <slotBase>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </slotBase>
</template>

<script>
import slotsBase from './components/slotsBase.vue';
export default {
  name: 'App',
  components: {
    slotsBase
  }
}
</script>