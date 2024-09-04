import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ArticleDetail from '../views/ArticleDetail.vue'



const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/article/:id', name: 'article', component: ArticleDetail },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
