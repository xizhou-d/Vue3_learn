<template>
    <div>
        <form>
            账号: <input type="text" v-model="account.username">
            密码: <input type="password" v-model="account.password">
        </form>

        <form>
            账号: <input type="text" v-model="username">
            密码: <input type="password" v-model="password">
        </form>

        <h2>{{username}}</h2>
        <h2>{{ password}}</h2>

        <hr>
        <show-info :name="name" :age="age"></show-info>
    </div>
</template>

<script>
    import { onMounted, reactive, ref } from 'vue'
    import ShowInfo from './ShowInfo.vue'
    export default {
        components: {
            ShowInfo
        }, 
        setup() {
            // 定义响应式数据： reactive / ref
            // 强调：ref 也可以定义复杂的数据
            const info = ref({})
            console.log('info.value', info.value)

            // 1. reactive 的使用场景
            // 1.1 条件一： reactive 应用于本地的数据
            // 1.2 条件二： 多个数据之间有联系/关系（聚合的数据，阻止在一起会有特别的作用）
            const account = reactive({
                username: 'xizhou',
                password: 123456
            })
            console.log('account', account)

            const username = ref('xizhou')
            const password = ref(123456)
            

            // 2. ref 的应用场景：其他场景一般都用 ref
            // 2.1 定义本地的一些简单的数据

            // 3. 定义从网络中获取的数据也用 ref 
            const musics = ref([])
            onMounted(() => {
                const serveMusics = ['A', 'B', 'C']
                musics.value = serveMusics
            })

            const name = ref('xizhou')
            const age = ref(28)

            return {
                account,
                username,
                password,
                name,
                age
            }
        }
    }
</script>

<style>

</style>