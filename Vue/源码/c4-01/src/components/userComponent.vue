<template>
    <h3>组件生命周期函数应用</h3>
    <p ref="name">这是一个文案</p>
    <ul>
        <li v-for="(item,index) in banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            banner:[]
        };
    },
    created() {  // beforeCreate不行
        this.banner = [
            { title: "标题1", content: "内容1" },
            { title: "标题2", content: "内容2" },
            { title: "标题3", content: "内容3" },
        ];
    },
    beforeMount() {
        console.log(this.$refs.name); // undefined
    },
    mounted() {
        console.log(this.$refs.name);
    },
};
</script>