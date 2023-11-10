<template>
    <div class="tab">
        <button @click="changeCurrentIndex(index)" v-for="(item, index) in tabs" :key="item" :class="{active: index === currentIndex}">{{item}}</button>
    </div>
    <div class="view ">
        <!-- 1. 第一种做法：v-if 进行逻辑判断，决定要显示哪一个组件  -->
        <!-- <template v-if="currentIndex === 0">
            <Home />
        </template>
        <template v-else-if="currentIndex === 1">
            <About />
        </template>
        <template v-else-if="currentIndex === 2">
            <Category />
        </template> -->

        <!-- 2. 动态组件实现这种效果 -->
        <component 
            :is="tabs[currentIndex]"
            name="xizhou"
            @home-emit="listenEvent"
            :age="29"
        >
        </component>
    </div>
</template>

<script>
    import About from './views/About.vue'
    import Home from './views/Home.vue'
    import Category from './views/Category.vue'

    export default {
        components: {
            About,
            Home,
            Category
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
            },
            listenEvent(payload) {
                console.log('App listen from home', payload)
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