import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
