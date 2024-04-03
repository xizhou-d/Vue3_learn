<template>
    <Comp>
        <!-- slot 的本质：组件 Comp 标签中的每一个元素都是一个函数，返回一个虚拟节点，作用域插槽就是给函数加上了一个参数 -->
        <!-- 在 Comp 组件中，slot 标签就是在调用 外面传递进来的函数 -->
        <!-- slots.default 函数 -->
        <p>default slot</p>
        <p>default slot</p>
        <p>default slot</p>
        <p>default slot</p>
        <p>default slot</p>
        <p>default slot</p>
        <!-- slots.slot1 函数 -->
        <template #slot1>
            <p>slot1</p>
        </template>
        <!-- slots.slot2 函数 -->
        <template #slot2="{ msg }">
            <p>slot2: {{ msg }}</p>
        </template>
    </Comp>
</template>

<script setup>
    import Comp from './Com2.js'
</script>

<style>

</style>