import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由設定
import './assets/tailwind.css'; // 導入 Tailwind CSS

createApp(App)
  .use(router) // 使用路由
  .mount('#app');