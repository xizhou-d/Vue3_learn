<template>
    <h1 class="title">{{title}}</h1>
    <h2>当前计数：{{counter}}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>

    <app-header></app-header>
</template>

<script>
    import AppHeader from './components/AppHeader.vue'
    export default {
        components: {
            AppHeader,
        },
        data() {
            return {
                title: 'App.vue 中的 title',
                counter: 0
            }
        },
        methods: {
            increment() {
                this.counter++
            },
            decrement() {
                this.counter--
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: red
    }
    .title {
        color: green
    }
</style>