import { reactive, ref, computed } from 'vue'

const state = reactive({a: 1, b: 2})

const sum = computed(() => {
    console.log('computed.')
    return state.a + state.b
})

console.log('sum', sum.value)
console.log('sum', sum.value)
console.log('sum', sum.value)
console.log('sum', sum.value)

// computed 会在 sum.value调用 value 的时候执行

// 注意：
state.a = 2
state.b = 3
// 这两句代码执行的时候，虽然 computed 依赖 state.b 和 state.b，但是 computed 里面的函数是不会执行的，只有在 sum.value 的时候才会执行