import { ref } from 'vue'

let vw = ref(document.documentElement.clientWidth)
let vh = ref(document.documentElement.clientHeight)

window.addEventListener('resize', () => {
    vw = ref(window.document.clientWidth)
    vh = ref(window.document.clientHeight)
})

export function useViewPort() {
    return {
        vw,
        vh
    }
}