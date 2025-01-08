<template>
    <div class="dashboard-page">
      <h1>歡迎來到使用介面</h1>
      <p>你已成功登入！</p>
      <button @click="logout">登出</button>
      <h1>跳轉設定頁面</h1>
      <button @click="goToSettings">設定</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // 清除登入狀態
        localStorage.removeItem('isAuthenticated');
        // 跳轉回登入頁面
        this.$router.push('/login');
      },
      goToSettings() {
        this.$router.push('/settings');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>