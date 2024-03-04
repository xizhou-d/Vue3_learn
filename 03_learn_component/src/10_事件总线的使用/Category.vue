<template>
    <div>Category</div>
</template>

<script>
    import eventBus from './utils/event-bus.js'
    export default {
        methods: {
            categoryHandle() {
                console.log('category 监听')
            }
        },
        created() {
            eventBus.on('global_event', this.categoryHandle)
        },
        unmounted() {
            console.log('category unmounted.')
            eventBus.off('global_event', this.categoryHandle)
        }
    }
</script>

<style>

</style>