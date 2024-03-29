import Vue from 'vue'
import App from './App.vue'
/*VueRouter*/
import router from  './router'
import hljs from 'highlight.js'
Vue.use(hljs.vuePlugin)
import './assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Icons */
import {
  faRocket,
  faDotCircle,
  faWindowRestore,
  faEdit,
  faCalendarAlt,
  faEnvelope,
  faTasks,
  faWindowMaximize,
  faChartBar,
  faChevronDown,
  faCode,
  faAngleDown,
  faAngleUp,
  faLayerGroup,
  faGripHorizontal,
  faAngleLeft,
  faClock,
  faRetweet,
  faTags,
  faTv,
  faPlug,
  faTable, faShoppingBag, faLiraSign, faTrash, faPlusCircle, faAngleDoubleRight, faInfo
} from '@fortawesome/free-solid-svg-icons'
library.add(faRocket, faDotCircle, faWindowRestore, faEdit, faCalendarAlt,faEnvelope,faTasks,faWindowMaximize,faChartBar,faChevronDown,faCode,faAngleDown,faAngleUp,faChartBar,faLayerGroup,faGripHorizontal,faAngleLeft,faClock,faRetweet,faTags,faTv,faPlug,faTable,faShoppingBag,faLiraSign,faTrash,faPlusCircle,faAngleDoubleRight,faInfo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
