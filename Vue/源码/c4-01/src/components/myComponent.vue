<template>
  <h3>组件生命周期</h3>
  <p>{{ msg }}</p>
  <button @click="msgHandle">更新数据</button>
</template>

<script>

// 生命周期函数
// 创建期：beforeCreate created
// 挂载期：beforeMount mounted
// 更新期：beforeUpdate updated
// 销毁期：beforeUnmount unmounted

export default {
  data() {
    return {
      msg: "更新之前",
    };
  },
  methods: {
    msgHandle() {
      this.msg = "更新之后";
    },
  },
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("组件创建之后");
  },
  beforeMount() {
    console.log("组件渲染之前");
  },
  mounted() {
    console.log("组件渲染之后");
  },
  beforeUpdate() {
    console.log("组件更新之前");
  },
  updated() {
    console.log("组件更新之后");
  },
  beforeUnmount() {
    console.log("组件销毁之前");
  },
  unmounted() {
    console.log("组件销毁之后");
  },
};
</script>