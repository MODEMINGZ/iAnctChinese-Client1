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
    }, {
      path: '/project_info/:id',
      name: 'Project_info',
      component: () => import('../views/Project_info.vue'),
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('../views/Editor.vue'),
    },
    {
      path: '/editor/:id',
      name: 'EditorEdit',
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
