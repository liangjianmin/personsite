const LoadingComponent = require('./Loading.vue')
const loading = {
  install: function(Vue,options) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading

