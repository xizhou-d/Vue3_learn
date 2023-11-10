<template>
    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(5)">+5</button>
        <button @click="btnClick(10)">+10</button>
        <button @click="btnClick(15)">+15</button>
    </div>
</template>

<script>
    export default {
        methods: {
            btnClick(num) {
                console.log('num', num)
                this.$emit('add', num)
            }
        }
    }
</script>

<style>

</style>