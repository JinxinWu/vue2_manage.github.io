import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history', // 去掉路径中的 # 号
  routes: [{
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        // 页面标题title
        title: '登录'
      },
      component: () => import('@/view/Login.vue')
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
  const tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  } else {
    next()
  }
})
export default router
