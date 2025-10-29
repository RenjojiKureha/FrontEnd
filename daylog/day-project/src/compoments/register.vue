<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>注册</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>用户名:</label>
          <input v-model="form.username" type="text" required>
        </div>
        <div class="form-group">
          <label>邮箱:</label>
          <input v-model="form.email" type="email" required>
        </div>
        <div class="form-group">
          <label>密码:</label>
          <input v-model="form.password" type="password" required>
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? '注册中...' : '注册' }}
        </button>
      </form>
      <p>已有账号？<router-link to="/login">立即登录</router-link></p>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../utils/api'

const router = useRouter()
const loading = ref(false)
const error = ref('')

const form = ref({
  username: '',
  email: '',
  password: ''
})

const handleRegister = async () => {
  try {
    // 和登录一样，先是注册态，err默认空
    loading.value = true
    error.value = ''
    
    // 调用注册接口 返回注册凭证。
    const response = await api.post('/register', form.value)

    // 存硬盘里
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    
    // 跳转页面到app.vue
    router.push('/')

  } catch (err) {
    error.value = err.response?.data?.error || '注册失败'
  } finally {
    // 结束注册态
    loading.value = false
  }
}
</script>

<style scoped>
/* 样式与 Login.vue 相同 */
</style>