import { createRouter, createWebHistory } from 'vue-router'
import DiaryView from '../views/DiaryView.vue'
import MoodView from '../views/MoodView.vue'
import QueryView from '../views/QueryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/diaries/:user',
      name: 'diaries',
      component: DiaryView
    },
    {
      path: '/mood/:mood',
      name: 'mood',
      component: MoodView
    },
    {
      path: '/query/:id',
      name: 'query',
      component: QueryView
    }
  ]
})

export default router
