// import { createApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import ProductItem from './ProductItem.vue'

const app = createApp(App)

// 全局注册 Productitem, 一般用的比较少
// app.component('product-item', ProductItem)

app.mount('#app')
