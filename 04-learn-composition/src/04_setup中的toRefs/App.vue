<template>
    <div>
        <h2>{{name}}-{{age}}-{{height}}</h2>
        <button @click="age++">修改按钮</button>
        <button @click="height = 1.88">修改height</button>
        <hr><hr><hr>
    </div>
</template>

<script>
    import { reactive, toRefs, toRef } from 'vue'
    export default {
        setup() {
            console.log('this', this)
            const info = reactive({
                name: 'xizhou', 
                age: 28,
                height: 188
            })

            // reactive 数据被解构之后会变成普通的值，失去响应式；这时，可以使用 toRefs 将解构出来的数据转变成 ref 数据
            const { name, age } = toRefs(info)

            // toRefs 解构多个属性的值； toRef 解构单个数据
            const height = toRef(info, 'height')

            return {
                info,
                name,
                age,
                height
            }
        }
    }
</script>

<style>

</style>