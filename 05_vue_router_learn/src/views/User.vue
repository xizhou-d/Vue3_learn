<template>
    <h1>User</h1>
    <!-- 动态路由在模版中如何拿到 id -->
    <h2>{{ $route.params.id }}</h2>
</template>

<script setup>
    import { useRoute, onBeforeRouteUpdate } from 'vue-router'
    // 代码中如何获取动态路由的 id

    // 只会在 进入 User 组件时会执行一次，但是切换不同 ID 的 User 组件是不会重复执行的
    const route = useRoute()
    console.log('用户ID: ', route.params.id)

    // onBeforeRouteUpdate 可以在切换的时候拿到具体的参数
    onBeforeRouteUpdate((to, from, ) => {
        console.log('from.params.id', from.params.id)
        console.log('to.params.id', to.params.id)
    }) 
</script>

<style>

</style>