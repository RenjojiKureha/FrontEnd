<template>
    <h3>组件B</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
    <button @click="updateHandle">修改数据</button>
</template>

<script>
export default {
    name: "ComponentB",
    data() {
        return {
            
        };
    },
    props:{
        title:{
            type:[ String, Number, Boolean, Object, Array],
            required:true,// 必选项
        },
        age:{
            type:Number,
            default:0,
        },
        // 数字和字符串可以直接default，但是如果是数组和对象，必须通过工厂函数返回默认值
        names:{
            type:Array,
            default(){
                return ["没传"];
            }
        }
    },
    methods:{
        updateHandle(){
            console.log(this.title);
            this.title = "我是修改后的数据";
            // Vue不允许子组件修改props传递过来的数据
            // props是只读的
        }
    }
}
</script>