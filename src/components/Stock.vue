<template>
    <div>
        {{stock}}
    </div>
</template>

<style scoped>
    .page-block {
        padding: 40px 10px 0px 40px;
        text-align: right;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'stock',
        data() {
            return {}
        },
        computed: mapState({
            stock (state) {
                var obj = Object.assign(state.shop.stock);
                if (obj.hasOwnProperty('data')) {
                    return obj.data[0];
                }
            }
        }),
        mounted(){
            this.getStock();
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                if (path == 'stock') {
                    this.getStock();
                }
            }
        },
        methods: {
            getStock(){
                this.$store.dispatch({
                    type: 'stock'
                });
            }
        }
    }
</script>
