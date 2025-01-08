<template>
    <div>
      <h1>設定頁面</h1>
      <button @click="goToDashboard">返回 Dashboard</button>
      <button @click="logout">登出</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // 返回 Dashboard 頁面
      goToDashboard() {
        this.$router.push('/dashboard');
      },
      // 登出邏輯
      logout() {
        // 這裡可以加入登出的邏輯，例如清除 token 或用戶信息
        localStorage.removeItem('token'); // 假設 token 存儲在 localStorage
        this.$router.push('/login'); // 登出後跳轉到登入頁面
      },
    },
  };
  </script>
  
  <style scoped>
  </style>