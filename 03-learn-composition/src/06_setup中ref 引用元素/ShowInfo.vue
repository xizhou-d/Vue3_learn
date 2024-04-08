<template>
    <div>ShowInfo</div>
</template>

<script>
    export default {
        // methods: {
        //     showInfoFoo() {
        //         console.log('show info foo function exec.')
        //     }
        // }

        setup() {
            function showInfoFoo() {
                console.log('show info foo function exec.')
            }

            return {
                showInfoFoo
            }
        }
    }
</script>

<style>

</style>