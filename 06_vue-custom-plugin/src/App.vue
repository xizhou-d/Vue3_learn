<template>
    <div v-loading="isLoading">App</div>
    <button @click="handleChangeLoading">切换 LOADING</button>
</template>

<script setup>
    import { ref } from 'vue'

    const isLoading = ref(false)

    const handleChangeLoading = () => {
        isLoading.value = !isLoading.value
        console.log('isLoading', isLoading)
    }
</script>

<style>
</style>
