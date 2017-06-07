<template>
    <div id="app">
        <NavHeader v-if="headShow"></NavHeader>
        <router-view class="view"></router-view>
        <footerCopy></footerCopy>
    </div>
</template>
<style scoped>

</style>
<script>
    import NavHeader from './views/common/Nav.vue'
    import footerCopy from './views/common/Footer.vue'
    import {mapGetters} from 'vuex'
    export default{
        name: 'app',
        computed: {
            ...mapGetters([
                'headShow'
            ])
        },
        mounted(){
            var path = this.$route.path.substring(1);
            this.headerChange(path);
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                this.headerChange(path);
            }
        },
        methods: {
            headerChange(path){
                if (path == 'register' || path.indexOf('pay')!= -1) {
                    this.$store.dispatch('hidehead');
                } else {
                    this.$store.dispatch('showhead');
                }
            },
        },
        components: {
            NavHeader,
            footerCopy
        }
    }
</script>

