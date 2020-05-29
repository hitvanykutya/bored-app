import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/activities' },
  {
    path: '/activities',
    name: 'activities',
    component: () => import(/* webpackChunkName: "activities" */ '../views/Activities.vue'),
  },
  {
    path: '/my-list',
    name: 'my-list',
    component: () => import(/* webpackChunkName: "my-list" */ '../views/MyList.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
