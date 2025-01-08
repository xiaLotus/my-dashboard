import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import DashboardPage from '../views/DashboardPage.vue';
import SettingPage from '../views/SettingPage.vue'; 


const routes = [
  {
    path: '/',
    redirect: '/login', // 預設重定向到登入頁面
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true }, // 需要登入才能訪問
  },
  {
    path: '/settings', // 設定頁面的路由
    name: 'SettingPage', // 使用多單詞命名
    component: SettingPage,
    meta: { requiresAuth: true }, // 需要登入才能訪問
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守衛：檢查是否需要登入
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // 假設使用 localStorage 存儲登入狀態
  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log(from);
    next('/login'); // 如果未登入，重定向到登入頁面
  } else {
    next();
  }
});

export default router;