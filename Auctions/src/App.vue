<template>
    <div id="app">
        <NavHeader></NavHeader>
        <router-view class="view"></router-view>
        <footerCopy></footerCopy>
    </div>
</template>
<style scoped>

</style>
<script>
    import NavHeader from './components/Nav.vue'
    import footerCopy from './components/Footer.vue'
    export default{
        name: 'app',
        components:{
            NavHeader,
            footerCopy
        }
    }
</script>

