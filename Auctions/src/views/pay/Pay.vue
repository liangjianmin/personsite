<template>
    <div class="pageview clr">
        <h2>某某订单剩余支付时间：29分钟</h2>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'pay',
        data() {
            return {

            }
        },
        computed: mapState({}),
        mounted(){

        },
        watch: {
            $route(to){

            }
        },
        methods: {

        }
    }
</script>
