<script>

export default {
    data(){
        return{
            names:["灵感菇","凑企鹅","Doro狗"],
            result:[
                {
                    "id":123456,
                    "title":"这是第一个名字",
                    "url":"https://images.pexels.com/photos/17349967/pexels-photo-17349967.jpeg?cs=srgb&dl=pexels-andrew-haimerl-17349967.jpg&fm=jpg"
                },{
                    "id":234567,
                    "title":"这是第二个名字",
                    "url":"https://images.pexels.com/photos/17349967/pexels-photo-17349967.jpeg?cs=srgb&dl=pexels-andrew-haimerl-17349967.jpg&fm=jpg"
                },{
                    "id":345678,
                    "title":"这是第三个名字",
                    "url":"https://images.pexels.com/photos/17349967/pexels-photo-17349967.jpeg?cs=srgb&dl=pexels-andrew-haimerl-17349967.jpg&fm=jpg"
                }
            ],
            userInfo:{
                name:"咕咕嘎嘎",
                age:16,
                sex:"女"
            }
        }
    }
}

</script>

<template>

    <h3>列表渲染</h3>

    <p v-for="(item,index) in names">{{ item }}-{{ index }}</p>
    <!-- （数组的项，数组下标） -->
    <!-- in 和 of 都能用 -->
    <div v-for="item of result">
        <img :src="item.url" alt="">
        <p>{{ item.title }}</p>
        <br>
    </div>

    <div>
        <p v-for="(value, key, index) in userInfo">{{ value }}-{{ key }}-{{ index }}</p>
    </div>
    
</template>

<style>
    img{
        width: 50px;
        height: 50px;
        float: left;
    }
</style>