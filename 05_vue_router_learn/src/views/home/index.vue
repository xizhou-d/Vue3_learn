<template>
    <h2>Home Page.</h2>
    <div class="home-recommand">
        <router-link to="/home/recommand">推荐</router-link>
        <router-link to="/home/ranking">排行</router-link>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style>

</style>