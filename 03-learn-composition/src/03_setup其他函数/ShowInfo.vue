<template>
    <div>
        <h2>ShowInfo: {{info}}</h2>
        <!-- 代码没有错误，但是违背规范（单项数据流） -->
        <button @click="info.name = 'dongzhou'">ShowInfo按钮</button>
        <!-- 正确的做法：符合单项数据流 -->
        <button @click="showInfoBtnClick">ShowInfo Button</button>

        <hr>
        <!-- 使用 readonly 的数据 -->
        <h2>readOnlyInfo: {{readOnlyInfo}}</h2>
        <!-- 代码无效，报警告 -->
        <button @click="readOnlyInfo.name = 'daming'">ShowInfo按钮</button>
        <!-- 正确的做法 -->
        <button @click="changeReadOnlyInfo">ReadOnlyInfo按钮</button>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                default: () => ({})
            },
            readOnlyInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ['changeInfoName', 'changeReadOnlyInfo'],
        setup(props, context) {
            function showInfoBtnClick() {
                // setup 中是不能使用 this 的
                // this.$emit('changeInfo')
                context.emit('changeInfoName', 'dongzhou')
            }

            function changeReadOnlyInfo() {
                context.emit('changeReadOnlyInfo', 'lieguo')
            }

            return {
                showInfoBtnClick,
                changeReadOnlyInfo
            }
        }
    }
</script>

<style>

</style>