import { ref } from 'vue'

export default function useCounter() {
    let counter = ref(100)
    const increament = () => {
        console.log(counter)
        counter.value++
    }
    const decreament = () => {
        counter.value--
    }

    return { counter, increament, decreament }
}