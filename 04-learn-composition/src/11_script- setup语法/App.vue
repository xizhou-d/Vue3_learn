<template>
    <div>message: {{message}}</div>
    <button @click="changeMessage">按钮</button>
    <show-info ref="ShowInfoRef" @aaa="handle" name="xizhou" :age="28"></show-info>
</template>

<script setup>
    // 1. 所有编写在顶层的代码，都是默认暴漏给 template 使用
    import { ref, onMounted, getCurrentInstance } from 'vue'
    import ShowInfo from './ShowInfo.vue'
    // 2. 定义响应式数据
    let message = ref('hello world')

    const ShowInfoRef = ref()

    function changeMessage() {
        message.value = 'hello script setup'
    }

    function handle(payload) {
        console.log('父组件接收到了事件', payload)
    }
    console.log('aaaaaaa', getCurrentInstance())

    onMounted(() => {
        // script setup 用法在使用获取实例中的方法的时候，必须暴露出来，比如这里，通过 showInfoRef 获取 show-info 组件实例，然后去执行 show-info 组件实例中的 foo 方法
        // 在 show-info 组件中必须使用 defineExpose 暴露出去·
        ShowInfoRef.value.foo()
    })
</script>

<style>

</style>