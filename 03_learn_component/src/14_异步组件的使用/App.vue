<template>
    <div class="tab">
        <button @click="changeCurrentIndex(index)" v-for="(item, index) in tabs" :key="item" :class="{active: index === currentIndex}">{{item}}</button>
    </div>
    <div class="view ">
        <!-- include: 组件的名称来自于组件定义时name选项  -->
        <keep-alive include="home,about">
            <component :is="tabs[currentIndex]"></component>
        </keep-alive>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'

    import About from './views/About.vue'
    import Home from './views/Home.vue'
    // Category 异步加载
    const AsyncCategory = defineAsyncComponent(() => import(/* webpackChunkName: 'category' */"./views/Category.vue"))
    // 同步加载，首次渲染就要下载代码，增加首屏渲染速度
    // import Category from './views/Category.vue'

    export default {
        components: {
            About,
            Home,
            Category: AsyncCategory
        },
        data() {
            return {
                tabs: ['home', 'about', 'category'],
                currentIndex: 0
            }
        },
        methods: {
            changeCurrentIndex(index) {
                console.log('index', index)
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .tab {
        display: flex;
    }
    .tab button {
        margin: 0 10px;
    }
    .active {
        background-color: skyblue;
    }
</style> 