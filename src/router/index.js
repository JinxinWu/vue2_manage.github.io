import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'hash', // 去掉路径中的 # 号
  routes: [
    {
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
        path: '/import/sum',
        meta: {
          title: '手术信息汇总表',
        },
        component: () => import('@/view/import/sum/index.vue'),
      },
      {
        path: '/import/consum/bag',
        meta: {
          title: '手术包',
        },
        component: () => import('@/view/import/consum/bag/index.vue'),
      },
      {
        path: '/import/consum/noch',
        meta: {
          title: '不收费耗材',
        },
        component: () => import('@/view/import/consum/noch/index.vue'),
      },
      {
        path: '/import/manual/salary',
        meta: {
          title: '人员薪资表'
        },
        component: () => import('@/view/import/manual/salary/index.vue'),
      },
      {
        path: '/import/manual/schedule',
        meta: {
          title: '人员排班表'
        },
        component: () => import('@/view/import/manual/schedule/index.vue'),
      },
      {
        path: '/import/indirect/zhejiu',
        meta: {
          title: '设备折旧明细表'
        },
        component: () => import('@/view/import/indirect/zhejiu/index.vue'),
      },
      {
        path: '/import/indirect/device',
        meta: {
          title: '手术间设备数量表'
        },
        component: () => import('@/view/import/indirect/device/index.vue'),
      },
      {
        path: '/import/indirect/house',
        meta: {
          title: '房屋折旧表'
        },
        component: () => import('@/view/import/indirect/house/index.vue'),
      },
      {
        path: '/import/indirect/ele',
        meta: {
          title: '水电费表'
        },
        component: () => import('@/view/import/indirect/ele/index.vue'),
      },
      {
        path: '/calculate/manual/surgery',
        meta: {
          title: '手术'
        },
        component: () => import('@/view/calculate/manual/surgery/index.vue'),
      },
      {
        path: '/calculate/manual/mazui',
        meta: {
          title: '麻醉'
        },
        component: () => import('@/view/calculate/manual/mazui/index.vue'),
      },
      {
        path: '/calculate/manual/recovery',
        meta: {
          title: '复苏'
        },
        component: () => import('@/view/calculate/manual/recovery/index.vue'),
      },
      {
        path: '/calculate/material',
        meta: {
          title: '材料费用'
        },
        component: () => import('@/view/calculate/material/index.vue'),
      },
      {
        path: '/calculate/indirect/standard',
        meta: {
          title: '各手术间单位时间标准成本'
        },
        component: () => import('@/view/calculate/indirect/standard/index.vue'),
      },
      {
        path: '/calculate/indirect/cal',
        meta: {
          title: '间接费用计算'
        },
        component: () => import('@/view/calculate/indirect/cal/index.vue'),
      },
      {
        path: '/calculate/sum',
        meta: {
          title: '成本汇总'
        },
        component: () => import('@/view/calculate/sum/index.vue'),
      },
      {
        path: '/user/list',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/view/user/Index.vue'),
      },
      {
        path: '/user/detail',
        meta: {
          title: '用户详情'
        },
        component: () => import('@/view/user/Detail.vue'),
      },
      {
        path: '/course/list',
        meta: {
          title: '课程管理'
        },
        component: () => import('@/view/course/Index.vue'),
      },
      {
        path: '/course/add',
        meta: {
          title: '新增课程'
        },
        component: () => import('@/view/course/Add.vue'),
      },
      {
        path: '/course/update',
        meta: {
          title: '编辑课程'
        },
        component: () => import('@/view/course/Add.vue'),
      },
      {
        path: '/course/detail',
        meta: {
          title: '课程详情'
        },
        component: () => import('@/view/course/Detail.vue'),
      },
      ]
    },
  ]
})
// 挂载路由导航守卫：to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, from, next) => {
  // 修改页面 title
  if (to.meta.title) {
    document.title = '小会计 - ' + to.meta.title
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
