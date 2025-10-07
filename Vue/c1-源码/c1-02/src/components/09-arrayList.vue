<script>

export default {
    data(){
        return{
            names:["灵感菇","凑企鹅","Doro狗"],
            nums1:[1, 2, 3, 4, 5],
            nums2:[6, 7, 8, 9, 10],
        }
    },
    methods:{
        addListHandle(){
            // 引起ui自动更新: push(), pop(), shift(), unshift(), splice(), sort(), reverse()
            // this.names.push("哈基米");

            // 不会引起ui自动更新: filter(), concat(), slice()
            // this.names.concat(["哈基米"]);
            // console.log(this.names.concat(["哈基米"]));
            // 使用其引起更新的方法：改变赋值
            this.names = this.names.concat(['哈基米']);
        },
        concatHandle(){
            this.nums1 = this.nums1.concat(this.nums2)
        }
    }
}

</script>

<template>

    <h3>数组变化侦听</h3>

    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>

    <button @click="concatHandle">合并数组</button>
    <h4>数组1</h4>
    <p v-for="(item, index) in nums1" :key="index">{{ item }}</p>
    <h4>数组2</h4>
    <p v-for="(item, index) in nums2" :key="index">{{ item }}</p>

</template>