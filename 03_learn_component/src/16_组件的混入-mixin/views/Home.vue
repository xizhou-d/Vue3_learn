<template>
    <h2>Home Component</h2>
    <p>{{homeNames}}-{{message}}</p>
</template>

<script>
    import messageMixin from '../mixins/message-mixin';
    export default {
        // mixins 中的 data 和 组件中 options 选项中的 data 会合并
        mixins: [messageMixin],
        data() {
            return {
                homeNames: ['aaa', 'bbb'],
                // 如果 mixins 中 data 的选项和 组件 options 选项中的 data 有相同的属性，那么优先使用 组件自身的
                message: 'Home message'
            }
        },
        watch() {

        },
        methods: {

        },
        // mixins 中的 生命周期函数和 组件中 options 选项中的 生命周期函数 都会执行
        created() {
            console.log('self created.')
        }
    }
</script>

<style>

</style>