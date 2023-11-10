// import { createApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

import 'utils/abc/cba/nba/index'

const app = createApp(App)

// 全局注册 Productitem, 一般用的比较少
// app.component('product-item', ProductItem)

app.mount('#app')


/**
 * 1. jsconfig.json 的作用 
 *      给 VSCode 读取, VSCode 在读取到其中的内容时，给我们的代码更加友好的提示
 * 
 * 2. 引入 
 */