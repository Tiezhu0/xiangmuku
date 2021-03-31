import { createRouter, createWebHistory } from 'vue-router'

// import img1 from '../components/img1.vue'
// import img2 from '../components/img2.vue'
import zhu_ye from '../views/zhu_ye.vue'
import biao_yi from '../views/biao_yi.vue'
import biao_er from '../views/biao_er.vue'
import jia_biao_yi from "../views/jia_biao_yi"
import jia_biao_er from "../views/jia_biao_er"
import gai_biao_yi from "../views/gai_biao_yi"
import gai_biao_er from "../views/gai_biao_er"
const routes = [
  {
    path:'/',
    name:'zhu_ye',
    component:zhu_ye
  },
  {
    path: '/zhu_ye',
    name: 'zhu_ye',
    component: zhu_ye,
    children:[
      {
        path:'biao_yi',
        component:biao_yi
      },
      {
        path: 'biao_er',
        component:biao_er
      },
      {
        path: 'jia_biao_yi',
        component: jia_biao_yi
      },
      {
        path: 'gai_biao_yi',
        component: gai_biao_yi
      },
      {
        path: 'jia_biao_er',
        component: jia_biao_er
      },
      {
        path: 'gai_biao_er',
        component: gai_biao_er
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
