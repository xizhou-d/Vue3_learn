import { ref, watch } from 'vue'

export default function useScrollPosition() {
    const scrollX = ref(0)
    const scrollY = ref(0)

    function scrollHandle() {
        scrollX.value = window.scrollX
        scrollY.value = window.scrollY
    }

    window.addEventListener('scroll', scrollHandle)

    watch([scrollX, scrollY], () => {
        console.log('scrollX', scrollX.value)
        console.log('scrollY', scrollY.value)
    })

    return {scrollX, scrollY}
}