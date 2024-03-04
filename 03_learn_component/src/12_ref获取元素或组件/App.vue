<template>
    <div class="root">
        <h2 ref="title" class="title" :style="{color: titleColor}">{{message}}</h2>
        <button ref="button" @click="changeMessage">修改title</button>
        <banner ref="banner" /> 
    </div>
</template>

<script>
    import Banner from './Banner.vue'
    export default {
        components: {
            Banner
        },
        data() {
            return {
                message: 'hello world',
                titleColor: 'red'
            }
        },
        methods: {
            changeMessage() {
                console.log('ref', this.$refs.title)
                console.log('buttonRevf', this.$refs.button)
                console.log('bannerRef', this.$refs.banner)

                // 3.1 在父组件中可以直接调用子组件的方法
                this.$refs.banner.bannerClick()
                // 3.2 通过获取组件实例，获取banner 中的元素(单个根节点)； 因为有换行符的存在，获取第一个节点的时候，往往会获取到一个文本节点，是因为换行符的原因
                console.log('this.$refs.banner.$el', this.$refs.banner.$el)
                // 3.3 多个根节点，获取元素
                console.log('this.$refs.banner.$el.nextElementSibling', this.$refs.banner.$el.nextElementSibling)
                console.log('this.$refs.banner.$el.nextElementSibling.nextElementSibling', this.$refs.banner.$el.nextElementSibling.nextElementSibling)

                // 4. 组件实例还有两个属性（了解）
                console.log('this.$parent', this.$parent) // 获取父组件
                console.log('this.$root', this.$root) // 获取根组件
                this.message = 'hello vue.'
            }
        }
    }
</script>

<style>

</style>