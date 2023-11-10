<template>
    <!-- <lists-item :lists="lists" @list-click="handleClick"></lists-item> -->
    <lists-item :lists="lists" @list-click="handleClick">
        <template v-slot:default="props">
            <button>{{props.item}}</button>
        </template>
    </lists-item>

    <h1>{{productContents[currentIndex]}}</h1>
</template>

<script>   
    import ListsItem from './ListsItem.vue'
    export default {
        components: {
            ListsItem
        },
        data() {
            return {
                lists: ['衣服', '鞋子', "裤子"],
                productContents: ['衣服列表', '鞋子列表', '裤子列表'],
                currentIndex: 0
            }
        },
        methods: {
            handleClick(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style>

</style>