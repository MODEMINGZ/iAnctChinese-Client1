import { createRouter, createWebHistory } from 'vue-router'
import { userInfoStore } from '../stores/user'

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
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
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
      component: () => import('../views/EditorEdit.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/User.vue'),
    }
  ]
})

//前置守卫路由
router.beforeEach((to, from, next) => {
  const store = userInfoStore()
  let isLogin = store.isLogin
  if (to.name !== 'Login' && to.name !== 'Register' && !isLogin && to.name !== 'About' && to.name !== 'Home') {
    next({ name: 'Login' })
  } else if (to.name == 'Login' && isLogin) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
