<template>
    <div class="sub">
        <button @click="btnClick(-1)">-1</button>
        <button @click="btnClick(-5)">-5</button>
        <button @click="btnClick(-10)">-10</button>
        <button @click="btnClick(-15)">-15</button>
    </div>
</template>

<script>
    export default {
        // emits: ['add'],
        // 对事件进行验证
        // emits: function(counter) {
        //     if (counter > 10) {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        methods: {
            btnClick(num) {
                console.log('num', num)
                // 1. 让子组件发出去一个自定义事件
                // 2. 第一个参数是自定义事件的名称， 第二个参数是传递的参数
                this.$emit('sub', num)
            }
        }
    }
</script>

<style>

</style>