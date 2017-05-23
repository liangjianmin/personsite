<template>
    <div class="pageview clr">
        <div class="cart">
            <div class="cart-th lbBox">
                <span class="cart-th-1">商品信息</span>
                <span class="cart-th-2">单价</span>
                <span class="cart-th-3">数量</span>
                <span class="cart-th-4">金额</span>
                <span class="cart-th-5">操作</span>
            </div>
            <div class="cart-td">
                
            </div>
        </div>
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
        name: 'cart',
        data() {
            return {

            }
        },
        computed: mapState({

        }),
        mounted(){
            var path = this.$route.params.id;
            this.getDetails(path);
        },
        watch: {
            $route(to){
                if (to.path.indexOf('editshop') != -1) {
                    var path = this.$route.params.id;
                    this.getDetails(path);
                }
            }
        },
        methods:{


        }
    }
</script>
