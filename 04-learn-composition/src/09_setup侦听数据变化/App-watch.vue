<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="changeMessage">修改message</button>
        <hr>

        <h2>{{info}}</h2>
        <button @click="changeInfo">修改info</button>
    </div>
</template>

<script>
    import { ref, watch, reactive } from 'vue'
    export default {
        setup() {
            // 1. 定义响应式数据
            const message = ref('hello world')

            // 2. 侦听数据变化
            watch(message, (newValue, oldValue) => {
                console.log('message watch ->', newValue, oldValue)
            })

            const info = reactive({
                name: 'xizhou',
                age: 28,
                friend: {
                    name: 'lieguo',
                    age: 20
                }
            })

            watch(info, (newValue, oldValue) => {
                console.log('info watch ->', newValue, oldValue)
            }, {
                immediate: true
            })

            // methods
            function changeMessage() {
                message.value = 'hello watch'
            }

            function changeInfo() {
                // info.name = 'dongzhou'
                info.friend.name = 'zhanguo'
            }

            return {
                message,
                changeMessage,
                info,
                changeInfo
            }
        }
    }
</script>

<style>

</style>