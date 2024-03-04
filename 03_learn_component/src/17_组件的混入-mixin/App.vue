<template>
    <div>
        <About></About>
        <Home></Home>
        <Category></Category>
    </div>
</template>

<script>
    import About from './views/About.vue'
    import Home from './views/Home.vue'
    import Category from './views/Category.vue'
    export default {
        components: {
            About,
            Home,
            Category
        }
    }
</script>

<style>

</style>