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
            component: () => import(/* webpackChunkName: 'about' */'../views/home/index.vue'),
            name: 'home',
            // 嵌套路由
            children: [
                {
                    path: '/home', // 相当于路径是 /home/recommand   这里与 react-router 路由有所区别，react-router 需要写全
                    redirect: '/home/recommand'
                },
                {
                    path: 'recommand', // 相当于路径是 /home/recommand   这里与 react-router 路由有所区别，react-router 需要写全
                    component: () => import(/* webpackChunkName: 'recommand' */'../views/home/HomeRecommand.vue')
                },
                {
                    path: 'ranking',
                    component: () => import(/* webpackChunkName: 'ranking' */'../views/home/HomeRanking.vue')
                }
            ]
        },
        { 
            path: '/about',
            component: () => import(/* webpackChunkName: 'home' */'../views/About.vue'),
            name: 'about'
        },
        {
            path: '/user/:id',
            component: () => import(/* webpackChunkName: 'user' */'../views/User.vue')
        },
        {
            //匹配到不存在的路径，先是下面的组件

            /**
             * 口注意：我在/：pathMatch（.*）后面又加了一个*；
             * • 它们的区别在于解析的时候，是否解析/：
             * Not Found: ["user", "hahah", "123" ] path: '/:pathMatch(•*)*',
             * Not Found user/hahan/1233 path: '/: pathMatch (•*) '
             */
            path: '/:pathMatch(.*)*',
            component: () => import(/* webpackChunkName: 'notFound */'../views/NotFound.vue')
        }
    ]
})

export default router