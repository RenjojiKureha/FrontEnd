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
        }
    }
}

</script>

<template>

    <h3>key属性添加到v-for中</h3>

    <p v-for="(item, index) in names" :key="index">{{ item }}</p>

    <div v-for="item of result" :key="id">
        <img :src="item.url" alt="">
        <p>{{ item.title }}</p>
        <br>
    </div>

</template>
