import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history', // 去掉路径中的 # 号
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/view/Login.vue')
    },

    {
      path: '/home',
      meta: {
        title: '主页'
      },
      component: () => import('@/view/Home.vue'),
      redirect: '/index',
      children: [{
          path: '/index',
          meta: {
            title: '首页'
          },
          component: () => import('@/view/Welcome.vue')
        },
        {
          path: '/user/list',
          meta: {
            title: '用户管理'
          },
          component: () => import('@/view/user/Index.vue'),
        },
        {
          path: '/user/add',
          meta: {
            title: '新增用户'
          },
          component: () => import('@/view/user/Add.vue'),
        },
        {
          path: '/user/update',
          meta: {
            title: '编辑用户'
          },
          component: () => import('@/view/user/Add.vue'),
        },
      ]
    },
  ]
})
// 挂载路由导航守卫：to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, from, next) => {
  // 修改页面 title
  if (to.meta.title) {
    document.title = '知否课堂后台管理系统 - ' + to.meta.title
  }
  // 放行登录页面
  if (to.path === '/login') {
    return next()
  }
  // 获取token
  // const token= sessionStorage.getItem('token')
  // if (!token) {
  //   return next('/login')
  // } else {
  //   next()
  // }
  return next()
})
export default router
