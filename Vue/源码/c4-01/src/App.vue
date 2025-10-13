<template>
<!-- <userComponent/> -->
  <component :is="tabComponent"></component>
  <button @click="changeHandle">切换组件</button>
</template>

<script>
import myComponent from "./components/myComponent.vue"; 
import userComponent from "./components/userComponent.vue";
import componentA from "./components/componentA.vue";
import componentB from "./components/componentB.vue";
export default {
  components: {
    myComponent,
    userComponent,
    componentA,
    componentB,
  },
  data() {
    return {
      tabComponent: "componentA",
    };
  }, 
  methods: {
    changeHandle() {
      this.tabComponent =
        this.tabComponent === "componentA" ? "componentB" : "componentA";
    },
  },
};
</script>