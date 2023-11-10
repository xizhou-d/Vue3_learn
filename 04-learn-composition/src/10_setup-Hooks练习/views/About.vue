<template>
    <div>
        <h2>About</h2>
        <h2>{{counter}}</h2>
        <button @click="decrement">-1</button>
        <button @click="increment">+1</button>
        <hr>
    </div>
</template>

<script>
    import useCounter from '../hooks/useCounter.js'
    import useTitle from '../hooks/useTitle.js'

    export default {
        setup() {
            useTitle('关于')
            return { ...useCounter() }
        }
    }
</script>

<style>

</style>