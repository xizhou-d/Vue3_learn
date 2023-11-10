<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="counter++">+1</button>
        <hr>

        <h2>{{name}}</h2>
        <button @click="name = 'ddddddd'">修改name</button>
    </div>
</template>

<script>
    import { ref, watch, watchEffect } from 'vue';
    export default {
        setup() {
            const counter = ref(0)
            const name = ref('xizhou')

            // 当 counter 发生变化后，执行某些操作
            watch(counter, (newValue, oldValue) => {
                console.log('counter 被修改了 -> watch')
            })

            // 1. watchEffect 中传入的函数默认会被自动执行
            // 2. 在执行的过程中，会自动的收集依赖（依赖哪些响应式的数据）
            const stopWatch = watchEffect(() => {
                console.log('watchEffect exec automatically--------', counter.value, name.value)

                if (counter.value > 10) {
                    stopWatch()
                }
            })

            return {
                counter,
                name
            }
        }
    }
</script>

<style>

</style>