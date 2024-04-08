import { watch, reactive, ref } from 'vue'

// 等效于vue2的$watch
const state = reactive({a: 1, b: 2})

const count = ref(0)

// 等效于vue2的$watch


// 1. 该写法不能监听到数据的改变: watch 第一个参数只能是响应式数据，state.a 的返回值是 1，无法监听
watch(state.a, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
})
state.a++

// 2. 将以上写法第一个参数稍作修改即可
watch(() => state.a, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
})
state.a++

// 3. count 两种方式都可以，因为 count 本身就是一个响应式对象
watch(() => count.value, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
})
count.value++

watch(count, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
})
count.value++

// 4. watch 可以监控多个值
watch([() => state.a, count], ([newValue1, newValue2], [oldValue1, oldValue2]) => {
    console.log('new: ', [newValue1, newValue2], 'old: ', [oldValue1, oldValue2])
})
count.value++

// 5. watch 默认情况下不会执行，但是也可以立即执行，需要设置第三个参数
watch(state.a, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
}, {
    immediate: true
})
state.a++

// 6. 这个代码为什么watch 打印是 new: 2 old: 0，而不是 new: 2 old: 1 ?
// 解释：这是因为 Vue 3 的 watch 函数是惰性的，这意味着它只会在新值与旧值不同时才会触发回调函数。
// 在您的代码中，count.value 的初始值为 0，因此第一次调用 count.value++ 时，newValue 为 1，oldValue 为 0。
// 第二次调用 count.value++ 时，newValue 为 2，但 oldValue 仍然为 0，因为 watch 函数尚未触发。
watch(count, (newValue, oldValue) => {
    console.log('new: ', newValue, 'old: ', oldValue)
})
count.value++
count.value++



// 说明：
// 注意：无论是 watchEffect 还是watch，当依赖项变化时，回调函数的运行都是异步的（微队列）应用：除非遇到下面的场景，否则均建议选择watchEffect
// • 不希望回调函数一开始就执行
// • 数据改变时，需要参考旧值
// • 需要监控一些回调函数中不会用到的数据