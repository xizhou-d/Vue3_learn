<template>
    <div class="app">
        <!-- template 中的对象自动解包，直接使用 counter 即可 -->
        <h2>当前计数: {{counter}}</h2>
        <button @click="increament">+1</button>
        <button @click="decreament">-1</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import useCounter from './hooks/useCounter'
    export default {
        setup() {
            // 默认情况下：定义的数据不是响应式数据，需要用 ref 包裹一下
            // let counter = ref(100)
            // const increament = () => {
            //     console.log(counter)
            //     counter.value++
            // }
            // const decreament = () => {
            //     counter.value--
            // }

            // return {
            //     counter,
            //     increament,
            //     decreament
            // }
            return {...useCounter()}
        }
    }
</script>

<style>

</style>