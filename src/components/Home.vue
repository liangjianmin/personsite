<template>
  <div class="home">
     <div v-if="user !=''">
       <p>欢迎用户:  {{user.session}}</p>
     </div>
    <div v-else>
      欢迎
    </div>
  </div>
</template>
<style scoped>
  .home {
    width: 100%;
    padding: 20px;
    font-weight: bold;
  }
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'home',
        data() {
            return {};
        },
        computed: mapState({
            user: state => state.user.sessiondata
        }),
        methods: {}
    }
</script>
