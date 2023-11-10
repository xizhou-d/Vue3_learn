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
                message: computed(() => this.message)
            }
        }
    }
</script>

<style>

</style>