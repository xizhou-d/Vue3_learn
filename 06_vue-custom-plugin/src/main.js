import { createApp } from 'vue'
import App from './App.vue'
import vLoading from './directives/loading'

const app = createApp(App)
// 注册自定义指令，需要放在 app.mount('#app') 前
app.directive('loading', vLoading)
app.mount('#app')
