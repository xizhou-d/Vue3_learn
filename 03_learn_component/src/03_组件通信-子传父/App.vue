<template>
    <div class="app">
        <h1>当前计数：{{ counter }}</h1>

        <!-- 1.自定义add-counter, 并且监听内部的add事件 -->
        <add-counter @add="changeCounter"></add-counter>
        <sub-counter @sub="changeCounter"></sub-counter>
        <sub-counter @add=""></sub-counter>
    </div>
</template>

<script>
    import AddCounter from './AddCounter.vue'
    import SubCounter from './SubCounter.vue';
    export default {
        components: {
            AddCounter,
            SubCounter
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            changeCounter(num) {
                console.log(11111111)
                this.counter += num
            }
        }
    }
</script>

<style>

</style>