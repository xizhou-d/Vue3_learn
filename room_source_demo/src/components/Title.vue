<template>
    <div class="headArea">
        <h1 class="title">{{props.title}}</h1>
        <div class="subTitle">{{props.subtitle}}</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'title'
        },
        subtitle: {
            type: String,
            default: 'subtitle'
        }
    })
</script>

<style lang="less" scoped>

</style>