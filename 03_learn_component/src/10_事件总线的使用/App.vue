<template>
    <div>AppContent</div>
    <home></home>
    <h2>{{message}}</h2>
</template>

<script>
    import Home from './Home.vue'
    import eventBus from './utils/event-bus';
    export default {
        components: {
            Home
        },
        data() {
            return {
                message: 'Hello World.'
            }
        },
        created() {
            eventBus.on('global_event', (name, age, height) => {
                console.log('registry events', name, age, height)
                this.message = `${name}-${age}-${height}`
            })
        }
    }
</script>

<style>

</style>