<script>

export default {
  data(){
    return{
      msg:'文本插值',
      hi:'hello world',
      num:10,
      ok:true,
      message:'大家好',
      rawHtml:"<a href='https://www.exmple.com'>会被识别为纯文本</a>"
    }
  }
}

</script>

<template>
  
<h3> 模板语法 </h3>

<p>{{ msg }}</p>

<p>{{ hi }}</p>

<p>{{ num + 1 }}</p>

<p>{{ ok ? 'yes' : 'no' }}</p>

<p>{{ message.split('').reverse().join('') }}</p>

<!-- 接下来是不能用的，使用即报错 -->
<!-- 禁止填入无返回值或非单一表达式 -->
<!-- <p>{{ var a = 1 }}</p> -->
<!-- <p>{{ if (ok) {return message} }}</p> -->

<p>{{ rawHtml }}</p>
<p v-html="rawHtml"></p>

</template>

<style scoped></style>
