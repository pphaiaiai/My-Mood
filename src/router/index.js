import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts/:user',
      name: 'posts',
      component: PostView
    }
  ]
})

export default router
