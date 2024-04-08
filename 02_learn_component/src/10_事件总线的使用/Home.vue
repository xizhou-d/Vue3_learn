<template>
    <div>Home</div>
    <home-banner></home-banner>
    <button @click="isShowCategory = false">移除 category</button>
    <category v-if="isShowCategory"></category>
</template>

<script>
    import HomeBanner from './HomeBanner.vue'
    import Category from './Category.vue'
    export default {
        data() {
            return {
                isShowCategory: true
            }
        },
        components: {
            HomeBanner,
            Category
        }
    }
</script>

<style>

</style>