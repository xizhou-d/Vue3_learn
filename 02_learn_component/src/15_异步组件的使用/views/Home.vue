<!-- ❗️ 如果没有 keep-alive， 最开始在 Home 组件中的 counter +1 操作的结果就不会被保存，切换到别的组件，再切换回来就会重新从零开始计数 -->
<template>
    <div>Home</div>
    <h2>当前计数: {{counter}}</h2>
    <button @click="changeCounter">+1</button>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            changeCounter() {
                this.counter++
            }
        },
        created() {
            console.log('Home created')
        },
        unmounted() {
            console.log('Home unmounted')
        },
        // 对于保持keep-alive组件, 监听有没有进行切换
        // keep-alive组件进入活跃状态
        activated() {
            // 重新切换到 Home 执行
            console.log('Home active')
        },
        deactivated() {
            // 从 Home 切换到其他组件时执行
            console.log('Home deactivated')
        }
    }
</script>

<style>
 
</style>