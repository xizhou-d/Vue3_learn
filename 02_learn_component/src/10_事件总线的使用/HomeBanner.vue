<template>
    <div class="home-banner">
        <button @click="btnClick">banner 按钮</button>
    </div>
</template>

<script>
    import eventBus from './utils/event-bus';
    export default {
        methods: {
            btnClick() {
                console.log('banner btnClick exec.')
                eventBus.emit('global_event', 'xizhou', 18, 188)
            }
        }
    }
</script>

<style>

</style>