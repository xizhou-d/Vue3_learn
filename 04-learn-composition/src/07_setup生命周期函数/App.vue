<template>
    <div>AppContent</div>
</template>

<script>
    import { onMounted } from 'vue';
    export default {
        // beforeMount() {
            
        // },
        // mounted() {

        // },
        // beforeUpdate() {

        // },
        // updated() {

        // }

        setup() {
            // 在执行 setup 函数的过程中，你需要注册别的生命周期函数, ❗️ 如果注册多个，那么会依次执行
            // ❗️ 在 vue hook (composition API) 中，是没有 beforeCreated 和 created 的
            // ❗️ vue3 把 beforeCreated 和 created 的执行，放到了 setup 中，之前在 这两个生命周期中做的事情，现在直接在 setup 中做
            onMounted(() => {
                console.log('Mounted01')
            })
            onMounted(() => {
                console.log('Mounted02')
            })
            onMounted(() => {
                console.log('Mounted03')
            })
        }
    }
</script>

<style>

</style>