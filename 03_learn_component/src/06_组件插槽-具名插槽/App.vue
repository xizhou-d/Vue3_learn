<template>
    <div>
        <nav-bar>
            <template v-slot:left>
                <button>{{leftText}}</button>
            </template>
            <template v-slot:center>
                <span>内容</span>
            </template>
            <!-- v-slot 可以替换为 # 号 -->
            <template #right>
                <a href="#">登陆</a>
            </template>
        </nav-bar>
        <h1>----------------------------------------------</h1>

        <!-- 动态设置具名插槽 -->
        <nav-bar>
            <template v-slot:[position]>
                <a href="#">注册</a>
            </template>
        </nav-bar>
        <button @click="changePosition('left')">左边</button>
        <button @click="changePosition('center')">中间</button>
        <button @click="changePosition('right')">右边 </button>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    export default {
        components: {
            NavBar
        },
        data() {
            return {
                position: 'center',
                leftText: 'return '
            }
        },
        methods: {
            changePosition(position) {
                this.position = position
            }
        }
    }
</script>

<style>

</style>