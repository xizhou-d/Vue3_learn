<template>
    <div>
        <h2>ShowInfo</h2>
        <h3>{{name}}-{{age}}</h3>
    </div>
</template>

<script>
    import { inject } from 'vue'
    export default {
        setup(props, context) {

            const name = inject('name')
            const age = inject('age')
            // setup 中 inject 接收两个参数，第二个参数是默认值，如果没有从父组件传过来，那么第二个参数就会生效
            const height = inject('height', 1.88)

            return {
                name,
                age
            }
        }
    }
</script>

<style>

</style>