import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { userInfoStore } from '../stores/user'

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/Project.vue'),
  }, {
    path: '/project_info/:id',
    name: 'project_info',
    component: () => import('../views/Project_info.vue'),
  },
  {
    path: '/editor/:id',
    name: 'editoredit',
    component: () => import('../views/EditorEdit.vue'),
    children: [
      {
        path: 'structure',
        name: 'structure',
        component: () => import('../views/dimension/Structure.vue')
      }, {
        path: 'entity',
        name: 'entity',
        component: () => import('../views/dimension/Entity.vue')
      },
      {
        path: 'knowledgeGraph',
        name: 'knowledge',
        component: () => import('../views/dimension/Knowledge.vue')
      },
      {
        path: 'relation',
        name: 'relation',
        component: () => import('../views/dimension/Relation.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
  }, {
    path: '/wrong',
    name: 'wrong',
    component: () => import('../views/WrongRoute.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 前置守卫路由
router.beforeEach((to, from, next) => {
  const store = userInfoStore()
  const isLogin = store.isLogin

  // 检查是否需要跳转到登录页面
  if (to.name !== 'login' && to.name !== 'register' && !isLogin && to.name !== 'about' && to.name !== 'home') {
    sessionStorage.setItem('redirect', from.path)
    next({ name: 'login' })
  }
  // 当路由为/editor/:id时，自动跳转到/editor/:id/structure
  else if (to.name === 'editoredit' && to.params.id && !to.matched.some(record => record.path === '/editor/:id/structure')) {
    next({ name: 'structure', params: { id: to.params.id } })
  }
  // 遇到错误路由时，自动跳转到home页面
  else if (to.matched.length === 0) {
    next({ name: 'wrong' })
  }
  // 登录状态下访问登录页面，重定向到home
  else if (to.name === 'login' && isLogin) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router