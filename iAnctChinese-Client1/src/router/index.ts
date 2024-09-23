import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/Project.vue'),
    },
    {
      path: '/document',
      name: 'Document',
      component: () => import('../views/Document.vue'),
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('../views/Editor.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/User.vue'),
    }
  ]
})

export default router
