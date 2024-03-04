<template>
    <div class="app">
        <Title :title="highData.title" :subtitle="highData.subtitle" />
        <div class="room-list">
            <template v-for="item in highData.list" :key="item.id">
                <room-item :room-data="item" />
            </template>
        </div>
    </div>
</template>

<script setup>
import Title from './components/Title.vue'
import highData from './data/high_score.json'
import RoomItem from './components/RoomItem.vue'

console.log('highdata', highData)


</script>

<style lang="less" scoped>
    .app {
        width: 1032px;
        margin: 0 auto;
        .room-list {
            display: flex;
            flex-wrap: wrap;
            margin: 20px -8px;
        }
    }
</style>
