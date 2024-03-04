import { createElementVNode } from "vue"

export default {
    // 子组件这里，每一个 slot 标签都相当于函数的调用
    setup(props, { slots }) {
        console.log('slots: ', slots)
        const defaultVnodes = slots.default()
        const slot1Vnodes = slots.slot1()
        const slot2Vnodes = slots.slot2({
            msg: 'msg from slot2'
        })
        return () => {
            return createElementVNode('div', null, [...defaultVnodes, ...slot1Vnodes, ...slot2Vnodes])
        }
    }
}