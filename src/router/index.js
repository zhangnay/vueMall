import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

const Home = ()=>import('@/views/Home.vue')
const Hot = ()=>import('@/views/Hot')
const Msg = ()=>import('@/views/Msg')
const Man = ()=>import('@/views/Man')
 
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  }
,
{
    path:'/hot',
    component:Hot
}
,
{
    path:'/msg',
    component:Msg
}
,
{
    path:'/man',
    component:Man
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
