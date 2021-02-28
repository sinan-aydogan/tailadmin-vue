import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Icons */
import { faRocket } from '@fortawesome/free-solid-svg-icons'
library.add(faRocket)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
