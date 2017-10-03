/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import SocialSharing from 'vue-social-sharing'

import router from 'src/router'
import store from 'src/store'
import i18n from 'src/i18n'

import App from 'App'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/chucknorris/static/images/chucknorris-gif.gif',
  loading: '/chucknorris/static/images/loading.gif',
  attempt: 1
})
Vue.use(SocialSharing)

if (process.env.NODE_ENV !== 'production') {
  require('vue-mock')
  Vue.config.devtools = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  i18n,
  router,
  components: {App}
})
