<template>
    <div id="app">
        <router-view class="view" name="wap"></router-view>
        <NavHeader v-if="headShow" v-cloak></NavHeader>
        <router-view class="view"></router-view>
        <footerCopy v-if="footerShow"></footerCopy>
    </div>
</template>
<style scoped>
    [v-cloak] {
        display: none;
    }
</style>
<script>
    import NavHeader from './views/common/Nav.vue'
    import footerCopy from './views/common/Footer.vue'
    import {mapGetters} from 'vuex'
    export default{
        name: 'app',
        computed: {
            ...mapGetters([
                'headShow',
                'footerShow'
            ])
        },
        mounted(){
            var path = this.$route.path.substring(1);
            this.headerChange(path);
            this.footerChange(path);
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                this.headerChange(path);
                this.footerChange(path);
            }
        },
        methods: {
            headerChange(path){
                if (path == 'register' || path.indexOf('pay') != -1 || path.indexOf('wap') != -1) {
                    this.$store.dispatch('hidehead');
                } else {
                    this.$store.dispatch('showhead');
                }
            },
            footerChange(path){
                if (path.indexOf('wap') != -1) {
                    this.$store.dispatch('hidefooter');
                } else {
                    this.$store.dispatch('showfooter');
                }
            }
        },
        components: {
            NavHeader,
            footerCopy
        }
    }
</script>

