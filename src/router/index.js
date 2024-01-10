import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Profile from '../views/ProfilePage.vue'
import Test from '../views/TestPage.vue'
import Portofolio from '../views/Portofolio.vue'
import Experience from '../views/ExperiencePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: Portofolio
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
