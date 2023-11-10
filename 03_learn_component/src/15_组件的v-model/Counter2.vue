<template>
    <div>{{counter}}</div>
    <button @click="changeCounter">修改counter</button>
    <hr>
    <div>{{mm}}</div>
    <button @click="changeMM">修改mm</button>
</template>

<script>
    export default {
        props: {
            counter: {
                type: Number,
                default: 0
            },
            mm: {
                type: String,
                default: ''
            }
        },
        emits: ['update:counter', 'update:mm'],
        methods: {
            changeCounter() {
                this.$emit('update:counter', 1999999)
            },
            changeMM() {
                this.$emit('update:mm', 'king under the mountain')
            }
        }
    }
</script>

<style>

</style>