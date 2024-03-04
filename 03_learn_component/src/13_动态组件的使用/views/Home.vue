<template>
    <div>Home: {{name}}-{{age}}</div>
    <button @click="btnClick">Home Button</button>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            age: {
                type: Number,
                default: 0
            }
        },
        emits: ['home-emit'],
        methods: {
            btnClick() {
                this.$emit('home-emit', 'aaaa', 1234)
            }
        }
    }
</script>

<style>
 
</style>