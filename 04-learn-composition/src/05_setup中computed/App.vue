<template>
    <div>
        <h2>{{fullname}}</h2>
        <hr>

        <h2>{{ scoreLevel }}</h2>
        <button @click="changeScore">修改score</button>
        <button @click="changeFullName">修改full name</button>
    </div>
</template>

<script>
    import { reactive, computed, ref } from 'vue'
    export default {
        setup() {
            // 1. 定义数据
            const names = reactive({
                firstName: 'kobe',
                lastName: 'bryent'
            })

            // 1. computed 写成函数，只有 get，没有 set
            // const fullname = computed(() => {
            //     return names.firstName + ' ' + names.lastName
            // })
            // 2. computed get 和 set 写法，❗️ computed 返回的是一个 ref 类型的数据
            let fullname = computed({
                get: function() {
                    return names.firstName + ' ' + names.lastName
                },
                set: function(value) {
                    const namesT = value.split(' ')
                    console.log('names', namesT)
                    names.firstName = namesT[0]
                    names.lastName = namesT[1]
                }
            })

            const score = ref(80)
            const scoreLevel = computed(() => {
                return score.value > 60 ? '及格' : '不及格'
            })
            function changeScore() {
                score.value = 59
            }
            function changeFullName() {
                // computed 是 ref 数据，所以修改的时候需要修改 fullname.value
                fullname.value = 'xi zhou'
            }

            return {
                names,
                fullname,
                scoreLevel,
                changeScore,
                changeFullName
            }
        }
    }
</script>

<style>

</style>