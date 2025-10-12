<template>

  <!-- <slotBase>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </slotBase> -->

  <!-- <slotsTwo>
    <template #header>
      <h3>{{ msg }}</h3>
    </template>
    <template v-slot:main>
      <p>这是内容</p>
    </template>
  </slotsTwo> -->

  <slotsAttr>
    <template #header="slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main="slotProps">
      <p>{{ slotProps.job }}</p>
    </template>
  </slotsAttr>

</template>

<script>

import slotsBase from './components/slotsBase.vue';
import slotsTwo from './components/slotsTwo.vue';
import slotsAttr from './components/slotsAttr.vue';

export default {
  name: 'App',
  components: {
    slotsBase,
    slotsTwo,
    slotsAttr,
  },
  data() {
    return {
      msg: '插槽标题',
      currentTest: '测试内容',
    };
  }
}
</script>