// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import VueLocalStorage from 'vue-localstorage'

Vue.use(materialize)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  materialize,
  components: { App },
  template: '<App/>'
})
