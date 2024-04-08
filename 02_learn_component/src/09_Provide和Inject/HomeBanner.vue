<template>
    <div class="home-banner">
        <h2>HomeBanner: {{name}}-{{age}}</h2>
        <h1>{{message.value}}</h1>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    export default {
        inject: ['name', 'age', 'message']
    }
</script>

<style>

</style>