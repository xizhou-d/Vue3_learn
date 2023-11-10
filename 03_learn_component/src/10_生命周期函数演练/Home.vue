<template>
    <div>Home</div>
</template>

<script>
    export default {
        beforeUnmount() {
            console.log('beforeUnmount Home')
        },
        // 6.2 . DOM元素被卸载完成
        unmounted() {
            console.log('unmounted Home')
        }
    }
</script>

<style>

</style>