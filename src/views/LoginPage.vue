<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 relative overflow-hidden">
    
    <!-- 下雪效果 -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div
        v-for="n in 50"
        :key="n"
        class="snowflake"
        :style="generateSnowflakeStyle()"
      ></div>
    </div>

    <!-- 登入表單 -->
    <div class="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md relative z-10">
      <h1 class="text-2xl font-bold text-center text-white mb-6">登入頁面</h1>
      <form @submit.prevent="login" class="space-y-6">
        
        <!-- 帳號 -->
        <div class="flex items-center">
          <label for="username" class="w-16 text-sm font-medium text-gray-300">帳號</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="flex-1 px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
        </div>

        <!-- 密碼 -->
        <div class="flex items-center">
          <label for="password" class="w-16 text-sm font-medium text-gray-300">密碼</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="flex-1 px-4 py-3 bg-gray-700 bg-opacity-50 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
        </div>

        <!-- 按鈕 -->
        <button
          type="submit"
          class="w-full py-3 px-4 bg-blue-600 bg-opacity-80 text-white font-semibold rounded-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>



  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: null, // 用於顯示錯誤訊息
      };
    },

    methods: {
      async login() {
        try{
          // eslint-disable-next-line no-unused-vars
          const response = await axios.post('http://127.0.0.1:8000/login', {
            username: this.username,
            password: this.password,
          });
          if(response.status === 200){
            // 假設登入成功，將登入狀態存儲到 localStorage
            localStorage.setItem('isAuthenticated', true);
            // 跳轉到使用介面
            this.$router.push('/dashboard');
          }else{
            this.errorMessage = '帳號或密碼錯誤';
            this.username = '';
            this.password = '';
          }
        }catch(error){
          this.errorMessage = '帳號或密碼錯誤';
          this.username = '';
          this.password = '';
          console.error(error);
        }
      },
        
      generateSnowflakeStyle() {
        const size = Math.random() * 5 + 5; // 雪花大小
        const left = Math.random() * 100; // 隨機水平位置
        const duration = Math.random() * 5 + 5; // 雪花落下速度
        const delay = Math.random() * 5; // 開始延遲
        return {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        };
      },
    },
  };
  </script>
  
  <style scoped>

    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

  /* 下雪動畫 */
    .snowflake {
      position: absolute;
      top: -10px;
      background-color: white;
      opacity: 0.8;
      border-radius: 50%;
      animation: fall linear infinite;
    }

    @keyframes fall {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(100vh);
      }
    }
  </style>