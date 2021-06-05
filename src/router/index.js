import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',name: 'login',component:to => import('../views/login.vue')},
  {path:'/main',name: 'main',component:to => import('../views/main.vue')}

]
// 路由守卫
// router.beforeEach((to,from,next)=>{
//   console.log(to);
//   console.log(from);
//   next()
// })

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  console.log(to);
  console.log(from);
  next()
})

export default router
