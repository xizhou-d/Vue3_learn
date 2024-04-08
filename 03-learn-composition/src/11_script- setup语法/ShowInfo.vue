<template>
    <div>ShowInfo: {{name}}-{{age}}</div>
    <button @click="emitHandle">发射事件</button>
</template>

<script setup>
    // 定义 props
    const props = defineProps({
        name: {
            type: String,
            default: 'default value'
        },
        age: {
            type: Number,
            default: 0
        }
    })

    const emits = defineEmits(['aaa'])
    function emitHandle() {
        emits('aaa', 88888)
    }

    function foo() {
        console.log('foo function exec')
    }

    defineExpose({
        foo
    })
</script>

<style>

</style>