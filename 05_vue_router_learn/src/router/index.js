import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// import About from '../views/About.vue'
// import Home from '../views/Home.vue'

// 异步引入组件可以分包处理, 也可以写在 router 配置里面
// const About = () => import(/* webpackChunkName: 'about' */'../views/About.vue')
// const Home = () => import(/* webpackChunkName: 'home' */'../views/Home.vue')

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: 'about' */'../views/About.vue'),
            name: 'home'
        },
        { 
            path: '/about',
            component: () => import(/* webpackChunkName: 'home' */'../views/Home.vue'),
            name: 'about'
        },
        {
            path: '/user/:id',
            component: () => import(/* webpackChunkName: 'user' */'../views/User.vue')
        }
    ]
})

export default router