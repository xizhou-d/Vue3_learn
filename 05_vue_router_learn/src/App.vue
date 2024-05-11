<template>
    <div>
        <h1>App Content</h1>
        <div class="nav">
            <!-- replace 代替当前历史记录，不会新增一条 history 记录 -->
            <!-- <router-link to="/home" replace>首页</router-link> -->
            <!-- <router-link to="/about" replace>关于</router-link> -->

            <!-- 对象的写法 -->
            <!-- <router-link :to="{ path: '/home' }" replace>首页</router-link> -->
            <!-- <router-link to="/home">首页</router-link> -->
            <!-- <router-link to="/about">关于</router-link> -->

            <!-- 默认被点击的 link 会自动添加一个类名 router-link-active，如果想换个名字可以使用 active-class -->
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/about" active-class="active">关于</router-link>
            <router-link to="/user/123">用户123</router-link>
            <router-link to="/user/345">用户345</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
</script>

<style>
    .router-link-active {
        color: blue;
    }
    .active {
        color: skyblue
    }
</style>
