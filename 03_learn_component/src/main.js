import { createApp } from 'vue'
// import App from './01_组件的嵌套使用/App'
// import App from './02_组件通信-父传子/App'
// import App from './03_组件通信-子传父/App'
// import App from './04_组件通信-案例练习/App'
// import App from './05_组件插槽-基本使用/App'
// import App from './06_组件插槽-具名插槽/App'
// import App from './07_组件插槽-作用域插槽/App'
// import App from './08_组件插槽-duyi/App'
// import App from './09_Provide和Inject/App'
// import App from './10_事件总线的使用/App'
// import App from './11_生命周期函数演练/App'
// import App from './12_ref获取元素或组件/App'
// import App from './13_动态组件的使用/App'
// import App from './14_Keep-Alive的使用/App'
// import App from './15_异步组件的使用/App'
// import App from './16_组件的v-model/App'
// import App from './17_组件的混入-mixin/App'
import App from './18_free_pratice/App'

// 分包处理
// import('./13_Keep-Alive的使用/utils/math.js').then(res => {
//     console.log('res', res)
//     res.sum(20, 30)
// })

const app = createApp(App)

// 全局 mixin， 所有的组件都会混入这个对象中的内容
app.mixin({
    created() {
        console.log('global mixin created')
    }
})

app.mount('#app')
