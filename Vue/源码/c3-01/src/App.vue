<template>
  <!-- <slotBase>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </slotBase> -->
  <slotsTwo>
    <template #header>
      <h3>{{ msg }}</h3>
    </template>
    <template v-slot:main>
      <p>这是内容</p>
    </template>
  </slotsTwo>
</template>

<script>
import slotsBase from './components/slotsBase.vue';
import slotsTwo from './components/slotsTwo.vue';
export default {
  name: 'App',
  components: {
    slotsBase,
    slotsTwo
  },
  data() {
    return {
      msg: '插槽标题'
    };
  }
}
</script>