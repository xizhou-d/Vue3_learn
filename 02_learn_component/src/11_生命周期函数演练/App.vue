<template>
    <div>AppContent</div>
    <h1>{{message}}</h1>
    <button @click="changeMessage">修改</button>
    <hr>

    <div>
        <button @click="showHome = !showHome">显示HOME</button>
        <home v-if="showHome"></home>
    </div>
</template>

<script>
    import Home from './Home.vue'
    export default {
        components: {
            Home
        },
        data() {
            return {
                message: 'hello world.',
                showHome: true
            }
        },
        methods: {
            changeMessage() {
                this.message = 'hello vue.'
            }
        },
        // 1. 组件被创建之前
        beforeCreate() {
            console.log('beforeCreate')
        },
        // 2. 组件被创建完成
        created() {
            console.log('created')
            console.log('1. 发送网络请求，请求数据')
            console.log('2. 监听 eventBus 事件')
            console.log('3. 监听 watch 数据')
        },
        // 3. 组件 template 准备被挂载
        beforeMount() {
            console.log('beforeMount')
        },
        // 4. 组件 template 被挂载: 虚拟 DOM -> 真实 DOM
        mounted() {
            console.log('mounted')
            console.log('1. 获取DOM')
            console.log('2. 使用DOM ')
        },
        // 5. 数据发生改变
        // 5.1 准备更新DOM
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        // 5.2 更新DOM
        updated() {
            console.log('updated')
        },
        // 6. 卸载 VNODE -> DOM 
        // 6.1 卸载之前
        beforeUnmount() {
            console.log('beforeUnmount')
        },
        // 6.2 . DOM元素被卸载完成
        unmounted() {
            console.log('unmounted')
        }
    }
</script>

<style>

</style>