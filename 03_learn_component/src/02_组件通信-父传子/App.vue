<template>
    <!-- 展示 A 的个人信息 -->
    <!-- address、class 没有被 props 或者 emits接收，那么 address、class 就是非 prop 的 attribute, 这些属性会被添加到自组件的根元素上 -->
    <show-info name="A" :age="18" :height="188"
                address="beijign" class="info"/>
    <!-- 展示 B 的个人信息 -->
    <show-info name="B" :age="19" :height="190"/>
    <!-- 展示 C 的个人信息 -->
    <show-info :age="18"/>
    <Test name="D" height="'189"></Test>
</template>

<script>
    import ShowInfo from './ShowInfo.vue'
    export default {
        components: {
            ShowInfo,
        }
    }
</script>

<style>

</style>