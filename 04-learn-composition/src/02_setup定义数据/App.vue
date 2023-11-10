<template>
    <div>
        <h2>普通数据</h2>
        <h2>{{message}}</h2>
        <button @click="changeMessage">修改</button>
        <hr><hr><hr>

        <h2>reactive 数据</h2>
        <h2>账号：{{account.username}}</h2>
        <h2>账号：{{account.password}}</h2>
        <button @click="changeAccount">修改账号</button>
        <button @click="account.username = 'dongzhou'">修改账号(标签上修改)</button>
        <hr><hr><hr>

        <!-- 默认情况下，在 template 中使用 ref 时，vue 会自动对其进行解包（取出其中的 value） -->
        <h2>ref数据</h2>
        <h2>{{counter}}</h2>
        <button @click="changeCounter">修改counter</button>
        <button @click="counter++">修改counter</button>
        <hr><hr><hr>

        <!-- ref 又被引用，使用的时候不需要写 .value -->
        <h2>ref被引用：{{info.counter}}</h2>
        <!-- 但是修改的时候需要写 .value -->
        <button @click="info.counter.value++">修改info.counter</button>
    </div>
</template>

<script>
    import { reactive, ref } from 'vue'
    export default {
        setup() {
            // 1. 定义普通的数据： 可以正常的使用
            // 缺点：数据不是响应式的
            let message = 'hello world'

            const changeMessage = () => {
                message = 'hello setup'
                console.log('message', message)
            }

            // 2. 定义响应式数据
            // 2.1 reactive 函数：定义复杂类型的数据
            const account = reactive({
                username: 'xizhou',
                password: 238974823978
            })

            function changeAccount() {
                account.username = 'dongzhou'
            }

            // 2.2 ref: 定义简单类型的数据（也可以定义复杂类型的数据）
            let counter = ref(0)
            function changeCounter() {
                counter.value++
            }


            // 2.3 浅层解包
            const info = {
                counter
            }

            return {
                message,
                changeMessage,
                account,
                changeAccount,
                counter,
                changeCounter,
                info
            }
        }
    }
</script>

<style>

</style>