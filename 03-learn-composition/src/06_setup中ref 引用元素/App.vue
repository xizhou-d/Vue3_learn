<template>
    <div>
        <h1 ref="titleRef">title</h1>
        <button ref="buttonRef">button</button>
        <button @click="getElements">获取</button>

        <show-info ref="showInfoRef"></show-info>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'

    import ShowInfo from './ShowInfo.vue'
    export default {
        components: {
            ShowInfo
        },
        setup() {
            const titleRef = ref()
            const buttonRef = ref()
            const showInfoRef = ref()

            function getElements() {
                console.log(titleRef.value)
                console.log(buttonRef.value)
            }

            onMounted(() => {
                console.log(titleRef.value)
                console.log(buttonRef.value)
                console.log(showInfoRef.value)

                showInfoRef.value.showInfoFoo()
            })

            return {
                titleRef,
                buttonRef,
                getElements,
                showInfoRef
            }
        }
    }
</script>

<style>

</style>