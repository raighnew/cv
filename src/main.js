import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  i18n: i18n,
  render: h => h(App)
}).$mount('#app')
