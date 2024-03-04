<template>
    <div>AppContent</div>
    <home></home>
    <h2>{{message}}</h2>
    <button @click="message = 'hello provide inject'">修改 message</button>
</template>

<script>
    import { computed } from 'vue'
    import Home from './Home.vue'
    export default {
        components: {
            Home
        },
        data() {
            return {
                message: 'Hello World.'
            }
        },
        // provide一般都是写成函数
        provide() {
            return {
                name: 'xizhou',
                age: 28,
                // message: this.message,
                // 如果provide中的数据可以变成响应式的，需要用 computed 包裹一下 
                message: computed(() => this.message)
            }
        }
    }
</script>

<style>

</style>