import { ref, watch } from 'vue'

export default function useTitle(titleValue) {
    const title = ref(titleValue)
    watch(title, (newValue) => {
        console.log('watch function exec.')
        document.title = newValue
    }, {
        immediate: true
    })

    return title
}