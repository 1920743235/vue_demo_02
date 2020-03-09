import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shopcar from '../views/Shopcar.vue'
import Member from '../views/Member.vue'
import Search from '../views/Search.vue'
import Detail from '../views/goods/Detail.vue'
import List from '../views/goods/List.vue'
import Listpc from '../views/photo/Listpc.vue'
import Iofo from '../views/photo/Info.vue'
import News from '../views/news/News.vue'
import NewsDetail from '../views/news/NewsDetail.vue'
import Videos from '../views/Videos.vue'
import Msage from '../views/Msage.vue'
import Contactus from '../views/Contactus.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/member',
        component: Member
            // component: () => import(/* webpackChunkName: "about" */ '../views/Shopcar.vue')
    },
    {
        path: '/shopcar',
        component: Shopcar
            // component: () => import(/* webpackChunkName: "about" */ '../views/Shopcar.vue')
    },
    {
        path: '/search',
        component: Search
            // component: () => import(/* webpackChunkName: "about" */ '../views/Shopcar.vue')
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/news/News',
        component: News
    },
    {
        path: '/news/detail/:id',
        component: NewsDetail
    },
    {
        path: '/goods/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/goods/list',
        component: List
    },
    {
        path: '/photo/list',
        component: Listpc
    },
    {
        path: '/photo/info/:id',
        component: Iofo
    },
    {
        path: '/msage',
        component: Msage
    },
    {
        path: '/contactus',
        component: Contactus
    }
]
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/') return next('/home')
    return next()
})
export default router
