<template>
    <div>{{modelValue}}</div>
    <button @click="changeCounter">修改counter</button>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: Number,
                default: 0
            }
        },
        emits: ['update:modelValue'],
        methods: {
            changeCounter() {
                this.$emit('update:modelValue', 1999999)
            }
        }
    }
</script>

<style>

</style>