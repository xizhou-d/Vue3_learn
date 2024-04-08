<template>
    <div class="app">
        <!-- App header -->
        <AppHeader></AppHeader>
        <!-- App content -->
        <AppContent></AppContent>
        <!-- App footer -->
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader'
    import AppContent from './components/AppContent'
    import AppFooter from './components/AppFooter'

    export default {
        components: {
            AppHeader,
            AppContent,
            AppFooter
        }
    }
</script>

<style>

</style>