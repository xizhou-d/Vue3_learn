<template>
    <div class="context-menu-box">
        <ContextMenu :menu="[
            { label: '添加' },
            { label: '编辑' },
            { label: '删除' },
            { label: '查看' },
            { label: '复制' }
        ]" @select="choose1 = $event" class="block">
            <div class="box-left">{{ choose1 }}</div>
        </ContextMenu>
        <ContextMenu :menu="[
            { label: '员工' },
            { label: '部门' },
            { label: '角色' },
            { label: '权限' },
            { label: '菜单' },
        ]" @select="choose2 = $event" class="block">
            <div class="box-right">
                <div class="">{{ choose2 }}</div>
                <ContextMenu :menu="[
                    { label: 'm3-1' },
                    { label: 'm3-2' },
                    { label: 'm3-3' },
                    { label: 'm3-4' }
                ]" @select="choose3 = $event">
                    <div class="right-child">{{ choose3 }}</div>
                </ContextMenu>
            </div>
        </ContextMenu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ContextMenu from './components/ContextMenu'

const choose1 = ref('')
const choose2 = ref('')
const choose3 = ref('')

</script>

<style scoped>
    .context-menu-box {
        display: flex;
        column-gap: 20px;
    }
    .block {
        flex: 1;
    }
    .box-left {
        height: 500px;
        background-color: greenyellow;
    }
    .box-right {
        background-color: orange;
        height: 500px;
        position: relative;
    }
    .right-child {
        height: 100px;
        width: 400px;
        background-color: skyblue;
        position: absolute;
        bottom: 20px;
        margin: auto;
        left: 0;
        right: 0
    }
</style>
