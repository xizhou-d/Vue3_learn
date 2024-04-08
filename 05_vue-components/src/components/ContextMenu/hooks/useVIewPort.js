import { ref } from 'vue'

const vw = ref(window.document.clientWidth)
const vh = ref(window.document.clientHeight)

export function useViewPort() {
    return {
        vw,
        vh
    }
}