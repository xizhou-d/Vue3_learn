<template>
    <div class="app">
        <!-- 1. input 的 v-model -->
        <!-- <input type="text" v-model="message">
        <input type="text" :value="message" @input="message = $event.target.value">

        <h2>{{message}}</h2> -->

        <!-- 2. 组件的 v-model： 默认 modelValue -->
        <!-- <counter v-model="appcounter"></counter> -->
        <!-- 等同于下面写法: 1. 绑定 modelValue; 2. 监听事件：v-on:update:modelValue -->
        <counter v-bind:modelValue="appcounter" @update:modelValue="appcounter = $event"></counter>

        <hr>

        <!-- 3. 组件的 v-model: 自定义名称 counter -->
        <Counter2 v-bind:counter="appcounter" @update:counter="appcounter = $event" v-model:mm="xizhou"></Counter2>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import Counter2 from './Counter2.vue'
    export default {
        components: {
            Counter,
            Counter2
        },
        data() {
            return {
                message: 'hello world',
                appcounter: 100,
                xizhou: 'mountain'
            }
        }
    }
</script>

<style>

</style>