import { ref, onMounted } from 'vue'

export default function useCounter() {
    const counter = ref(0)

    function increment() {
        counter.value++
    }

    function decrement() {
        counter.value--
    }

    onMounted(() => {
        setTimeout(() => {
            counter.value = 9998
        }, 1000)
    })

    return {
        counter,
        increment,
        decrement
    }
}