import { watch, reactive, ref } from 'vue'

const state1 = reactive({a:1, b:2});
const state2 = reactive({c:3, d:4});

console.log('...state1', {...state1})
console.log('...state2', {...state2})