import { onMounted, onUnmounted, ref } from 'vue'

export function useContextMenu(containerRef) {
    const x = ref(0)
    const y = ref(0)
    const showMenu = ref(false)

    const handleContextMenu = (e) => {
        console.log('sdlkfsldkfslkdfdslfjlsdk', e.target)
        e.preventDefault()
        e.stopPropagation()
        x.value = e.clientX
        y.value = e.clientY
        showMenu.value = true
    }

    const closeMenu = () => {
        showMenu.value = false
    }

    onMounted(() => {
        const container = containerRef.value

        container.addEventListener('contextmenu', handleContextMenu)
        // 这里要用事件捕获，不能用事件冒泡，如果在父标签上加了一个 阻止冒泡的事件，那么这个 菜单就关不掉了。但是 捕获阶段是不能被阻止的
        window.addEventListener('click', closeMenu, true)
        // 处理同时出来多个菜单的问题
        window.addEventListener('contextmenu', closeMenu, true)
    })

    onUnmounted(() => {
        const container = containerRef.value

        container.removeEventListener('contextmenu', handleContextMenu)
        window.removeEventListener('click', closeMenu)
        window.removeEventListener('contextmenu', closeMenu)
    })

    return {
        x,
        y,
        showMenu
    }
}