<template>
    <div class="lists">
        <div :class="{list: true, active: index === activeIndex }" v-for="(item, index) in lists" @click="handleClick(index)" :key="item">
            <!-- slot 标签上面绑定的 :item="item" 可以回传到 APP.vue 中 ListsItem 组件的插槽中 -->
            <slot :item="item">
                <span>{{item}}</span>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            lists: Array
        },
        data() {
            return {
                activeIndex: 0
            }
        },
        emits: ['listClick'],
        methods: {
            handleClick(index) {
                this.activeIndex = index
                this.$emit('listClick', index)
            }
        }
    }
</script>

<style scoped>
    .lists {
        display: flex;
        .list {
            padding: 10px;
            flex: 1;
            text-align: center;
        }
        .list:hover {
            background-color: #ffd;
        }
        .active::after {
            content: '';
            display: block;
            height: 5px;
            background-color: red;
        }
        .active {
            color: red;
            font-weight: 700;
        }
    }
</style>