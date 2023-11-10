<template>
    <div>AppContent</div>
    <ShowMessage title="屈原" content="离骚">
        <button>button Element.</button>
    </ShowMessage>

    <ShowMessage title="屈原" content="离骚">
        <p>插入 p 元素</p>
    </ShowMessage>

    <ShowMessage title="屈原" content="离骚">
        <h2>长太息以掩涕兮</h2>
    </ShowMessage>

    <ShowMessage title="屈原" content="离骚">
        <!-- <img src="@/images/shihao03.jpeg " alt=""> -->
    </ShowMessage>

</template>

<script>
    import ShowMessage from './ShowMessage.vue'
    export default {
        components: {
            ShowMessage
        }
    }
</script>

<style>

</style>