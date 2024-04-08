<template>
    <div class="app">
        <!-- 计数器 -->
        <!-- <About />
    <Home /> -->

        <!-- Home 和 About 页面的切换 -->
        <button @click="currentPage = 'home'">Home</button>
        <button @click="currentPage = 'about'">About</button>

        <component :is="currentPage"></component>


        <button @click="Aclick">首页 A</button>
        <button @click="Bclick">首页 B</button>
        <button @click="Cclick">首页 C</button>
    </div>
</template>

<script>
import { ref } from 'vue'

import About from './views/About.vue'
import Home from './views/Home.vue'
import useTitle from './hooks/useTitle.js'
import useScrollPosition from './hooks/useScrollPosition.js'
export default {
    components: {
        About,
        Home
    },
    setup() {
        const currentPage = ref('Home')
        const title = useTitle('hello app')
        const { scrollX, scrollY } = useScrollPosition()

        function Aclick() {
            title.value = '首页 A'
        }

        function Bclick() {
            title.value = '首页 B'
        }

        function Cclick() {
            title.value = '首页 C'
        }

        return {
            currentPage,
            Aclick,
            Bclick,
            Cclick
        }
    }
}
</script>

<style scoped>
    .app {
        height: 2000px;
    }
</style>