const target = new WeakMap()

// 元素尺寸发生变化时的获取到元素的宽高
const ob = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const handle = target.get(entry.target)
        if (handle) {
            const box = entry.borderBoxSize[0]
            handle({
                width: box.inlineSize,
                height: box.blockSize
            })
        }
    }
})

export default {
    mounted(el, binding) {
        target.set(el, binding.value)
        ob.observe(el)
    },
    unMounted(el) {
        ob.unobserve(el)
    }
}