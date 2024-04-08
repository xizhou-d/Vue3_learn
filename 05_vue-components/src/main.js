import { createApp } from 'vue'
import App from './App.vue'
import resizeOb from './directives/resizeOb'

const app = createApp(App)
app.directive('resize-ob', resizeOb)
app.mount('#app')
