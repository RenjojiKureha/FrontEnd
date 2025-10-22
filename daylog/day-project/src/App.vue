<template>

  <div id="app">

    <header v-if="isAuthenticated" class="app-header">
      <div class="user-info">
        欢迎, {{ currentUser?.username }}
        <button @click="handleLogout" class="logout-btn">退出</button>
      </div>
    </header>
    
    <main v-if="isAuthenticated">
      <!-- 双向绑定selectDate -->
      <calender v-model="selectedDate"/>
      <!-- 绑来的数据传给logList -->
      <logList :selected-date="selectedDate"/>
    </main>

    <router-view v-else/>
  </div>

</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logList from './compoments/logList.vue';
import calender from './compoments/calendar.vue';
import test from './compoments/test.vue';

export default {
  components: {
    logList,
    calender,
    test,
  },
  // 混写vue3
  setup() {
    const router = useRouter()
    // calendar里的date
    const selectedDate = ref(new Date())
    
    const currentUser = ref(JSON.parse(localStorage.getItem('user') || 'null'))
    const isAuthenticated = computed(() => !!localStorage.getItem('token'))
    
    const handleLogout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/login')
    }
    
    onMounted(() => {
      if (!isAuthenticated.value) {
        router.push('/login')
      }
    })
    
    return {
      selectedDate,
      currentUser,
      isAuthenticated,
      handleLogout
    }
  }
};
</script>

<style scoped>
.app-header {
  background: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logout-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
