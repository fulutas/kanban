import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(folderName,fileName){
  return() => import(`@/${folderName}/${fileName}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('views','Home')
  },
  {
    path: '/about',
    name: 'About',
    component: lazyLoad('views','About')
  },
  {
    path: '/facts/:id',
    name: 'Facts',
    component: lazyLoad('views','Facts')
  },
  {
    path : "*",
    name : 'not-found',
    component: lazyLoad('views','NotFound')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
