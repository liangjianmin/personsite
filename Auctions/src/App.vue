<template>
    <div id="app">
        <NavHeader></NavHeader>
        <router-view class="view"></router-view>
    </div>
</template>
<style scoped>

</style>
<script>
    import NavHeader from './components/Nav.vue'
    export default{
        name: 'app',
        components:{
            NavHeader
        }
    }
</script>

