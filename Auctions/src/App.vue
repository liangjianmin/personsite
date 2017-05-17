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
    import NavHeader from './views/common/Nav.vue'
    import footerCopy from './views/common/Footer.vue'
    export default{
        name: 'app',
        components:{
            NavHeader,
            footerCopy
        }
    }
</script>

