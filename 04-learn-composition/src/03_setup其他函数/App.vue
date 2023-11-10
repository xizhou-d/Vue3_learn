<template>
    <div>
        <h2>APP info: {{info}}</h2>
        <show-info :readOnlyInfo="readOnlyInfo " :info="info" @changeReadOnlyInfo="changeReadOnlyInfo" @changeInfoName="changeInfoName"></show-info>
    </div>
</template>

<script>
    import ShowInfo from './ShowInfo.vue'
    import { reactive, readonly } from 'vue'
    export default {
        components: {
            ShowInfo
        },
        setup() {
            // 本地定义多个数据，都需要传递给子组件
            const info = reactive({
                name: 'xizhou',
                age: 28,
                height: 188
            })

            function changeInfoName(name) {
                console.log('name', name)
                info.name = name 
            }


            // readonly 数据
            const readOnlyInfo = readonly(info)

            function changeReadOnlyInfo(payload) {
                info.name = payload
            }

            return {
                info,
                changeInfoName,
                readOnlyInfo,
                changeReadOnlyInfo
            }
        }
    }
</script>

<style>

</style>