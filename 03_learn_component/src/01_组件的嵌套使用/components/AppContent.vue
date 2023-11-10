<template>
    <div class="content">
        <div class="banner"></div>
        <AppContentLists></AppContentLists>
    </div>
</template>

<script>
    import AppContentLists from './AppContentLists.vue';
    export default {
        components: {
            AppContentLists
        }
    }
</script>

<style scoped>
    .content {
        background-color: greenyellow;
    }
</style>