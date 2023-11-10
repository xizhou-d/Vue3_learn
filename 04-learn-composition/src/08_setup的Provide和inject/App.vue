<template>
    <div>
        <h2>{{name}}</h2>
        <button @click="name = 'dongzhou'">修改name</button>
        <show-info></show-info>
    </div>
</template>

<script>
    import { provide, ref } from 'vue'

    import ShowInfo from './ShowInfo.vue'
    export default {
        components: {
            ShowInfo
        },
        setup() {
            const name = ref('xizhou')
            provide('name', name)
            provide('age', 18)

            return {
                name
            }
        }
    }
</script>

<style>

</style>