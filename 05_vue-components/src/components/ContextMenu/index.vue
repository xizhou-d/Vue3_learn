<template>
    <div class="container" ref="containerRef">
        <slot></slot>
        <Teleport to="body">
            <Transition @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter">
                <div v-if="showMenu" class="context-menu" @click="handleClick" :style="{ left: posX + 'px', top: posY + 'px' }">
                    <div class="context-menu-item" v-for="item in menu" :key="item.label">{{ item.label }}</div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useContextMenu } from './hooks/useContextMenu'
    import { useViewPort } from './hooks/useVIewPort'

    const props = defineProps({
        menu: {
            type: Array,
            default: []
        }
    })

    const containerRef = ref()

    const emit = defineEmits(['select'])

    const handleClick = (e) => {
        console.log('e', e.target.innerHTML)
        showMenu.value = false
        emit('select', e.target.innerHTML)
    }

    const handleBeforeEnter = (e) => {
        e.style.height = 0
    }

    const handleEnter = (e) => {
        e.style.height = 'auto'
        const h = e.clientHeight
        e.style.height = 0

        requestAnimationFrame(() => {
            e.style.height = h + 'px'
            // 这里加了过渡，会导致点击空白处关闭菜单的时候也需要 .5s，因此 需要加上一个事件 afterEnter
            e.style.transition = '.5s'
        })
    }

    const handleAfterEnter = (e) => {
        e.style.transition = 'none'
    }

    const { x, y, showMenu } = useContextMenu(containerRef)

    // 处理邮件菜单超出视口的问题
    const { vw, vh } = useViewPort()
    const pos = computed(() => {
        const posX = x.value
        const posY = y.value

        return {
            posX,
            posY
        }
    })
</script>

<style scoped>
    .context-menu {
        position: fixed;
        background-color: #fff;
        width: 100px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
        padding: 4px;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
    }
    .context-menu-item:hover {
        background-color: #ccc;
    }
    .v-enter-from {
        opacity: 0;
    }
    .v-enter-to {
        transition: .5s;
        opacity: 1;
    }
</style>