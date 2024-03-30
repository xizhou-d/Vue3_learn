import { reactive, ref, computed } from 'vue'

const state = reactive({a: 1, b: 2})

// 1. ref接受一个数值做参数
const count = ref(0)
// 需要用 count.value 才能取出来原来的值
console.log('count, ', count,count.value)


// 2. ref 接收一个对象做参数
const info = ref({a: 1, b: 2})
// info.value 是一个代理对象
console.log('info', info, info.value)

// 3. ref 接收一个 proxy 对象
const state1 = ref(state)
// 会直接将 proxy 对象返回
console.log('state1.value === state', state1.value === state) // true

