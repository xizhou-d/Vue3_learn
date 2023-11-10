<template>
    <div class="infos">
        <!-- <h2 :class="{[$attrs.address]: true, [$attrs.class]: true}">姓名：{{ name }}</h2> -->
        <h2>年龄：{{ age }}</h2>
        <h2>身高：{{ height}}</h2>
    </div>
    <div class="others" v-bind="$attrs">第二个根节点</div>
</template>

<script>
    export default {
        // props: 接收父组件传递过来的属性
        // 1. props 数组语法
        // 弊端 > 1. 不能对类型进行验证；2. 没有默认值
        // props: ['name', 'age', 'height']

        // 2. props 对象语法
        // props: {
        //     name: String,
        //     age: Number,
        //     height: Number
        // }

        // 3. props 对象语法
        props: {
            name: {
                type: String,
                default: '默认 name'
            },
            age: {
                type: Number,
                // 表示 age 必须传递，默认值是 false
                required: true,
                default: 100,
            },
            height: {
                type: Number,
                default: 200
            },
            propA: {
                // 如果指定 prop 是引用数据类型，那么必须是一个函数返回一个 对象
                type: Object,
                default: () => { name: 'James' }
            }
        },
        // 存在非 prop 的 attribute ，不添加到自组件的根元素上，可以把 inheritAttrs 设置为 false
        // inheritAttrs: false
    }
</script>

<style>

</style>