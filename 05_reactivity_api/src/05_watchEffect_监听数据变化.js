import { watchEffect, ref, reactive } from "vue";

/**
 * const stop = watchEffect(() => {
 *      // 该函数会立即执行，然后追中函数中用到的响应式数据，响应式数据变化后会再次执行
 * })
 * // 通过调用 stop 函数，会停止监听
 * stop() // 停止监听
*/

const state = reactive({a: 1, b: 2})

const count = ref(0)

// 会立即执行一次
watchEffect(() => {
    console.log(state.a, count.value)
})

// state.a++


// watchEffect 是异步的
state.a++
state.a++
state.a++
state.a++
count.value++
count.value++
count.value++
count.value++
count.value++