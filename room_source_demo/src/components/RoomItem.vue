<template>
    <div class="room-item">
        <div class="inner">
            <img :src="props.roomData.picture_url" alt="">
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        roomData: {
            type: Object,
            default: () => ({})
        }
    })
    console.log('rootData', props.rootData)
</script>

<style scoped>
    .room-item {
        width: 33.333333%;
        .inner {
            margin: 0 8px 12px;
        }
        img {
            width: 100%;
            border-radius: 5px;
        }    
    }
</style>