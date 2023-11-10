<template>
    <div>
        <h1>{{title}}</h1>
        <div class="content">
            <slot>
                <p>插槽的默认内容，如果没有传递进来内容，就会用默认内容</p>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style>

</style>